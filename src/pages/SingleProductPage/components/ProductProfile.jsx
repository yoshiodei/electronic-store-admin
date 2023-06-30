import React, { useEffect, useState } from 'react';
import {
  arrayUnion, doc, getDoc, updateDoc,
} from 'firebase/firestore';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import Carousel from './Carousel';
import { db } from '../../../config/firebaseConfig';

export default function ProductProfile() {
  const [status, setStatus] = useState('');
  const [data, setData] = useState(null);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showBlockPostModal, setShowBlockPostModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClosePostModal = () => setShowPostModal(false);
  const handleShowPostModal = () => setShowPostModal(true);

  const handleCloseBlockPostModal = () => setShowBlockPostModal(false);
  const handleShowBlockPostModal = () => setShowBlockPostModal(true);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleBlock = async () => {
    try {
      const messageObj = {
        message: `Your item, ${data?.name}, has been blocked due to breaching the platform guidelines.`,
        heading: 'Block Product',
        modifiedAt: new Date().getTime(),
      };

      const productRef = doc(db, 'products', id);
      const vendorRef = doc(db, 'vendors', data.vendorId);

      await updateDoc(productRef, {
        status: 'blocked',
      });

      await updateDoc(vendorRef, {
        notifications: arrayUnion(messageObj),
      });

      setStatus('blocked');
      handleCloseBlockPostModal();
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleUnblock = async () => {
    try {
      const messageObj = {
        message: `Congratulations, your item, ${data?.name}, has been re-activated.`,
        heading: 'Unblock Product',
        modifiedAt: Date.now(),
      };

      const productRef = doc(db, 'products', id);
      const vendorRef = doc(db, 'vendors', data.vendorId);

      await updateDoc(productRef, {
        status: 'active',
      });

      await updateDoc(vendorRef, {
        notifications: arrayUnion(messageObj),
      });

      setStatus('active');
      handleClose();
    } catch (err) {
      console.log(err.message);
    }
  };

  const handlePost = async () => {
    try {
      const messageObj = {
        message: `Congratulations, your item, ${data?.name}, has been posted. It is now available to be viewed by all on this paltform`,
        heading: 'Post Product',
        modifiedAt: Date.now(),
      };

      const productRef = doc(db, 'products', id);
      const vendorRef = doc(db, 'vendors', data.vendorId);

      await updateDoc(productRef, {
        status: 'active',
      });

      await updateDoc(vendorRef, {
        notifications: arrayUnion(messageObj),
      });

      setStatus('active');
      handleClosePostModal();
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'products', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const product = docSnap.data();
        console.log('product data -->', product);
        setData(product);
        setStatus(product.status);
      } else {
        console.log('No such document!');
      }
    };

    fetchData();
  }, []);

  const handleNavigate = () => {
    if (data?.vendorId) {
      navigate(`/user/${data.vendorId}`);
    }
  };

  let itemImages = [];
  if (data?.image) { itemImages.push(data.image); }
  if (data?.length > 0) { itemImages = data.images; }

  return (
    <>
      <div className="row product-profile mt-0 g-3">
        <div className="col-6">
          <div className="product-profile__image-box">
            <div className="product-profile__top-div">
              <Carousel image={data?.image} images={data?.images} />
            </div>
            <div className="product-profile__bottom-div">
              {
              itemImages.map((itemImage, index) => (
                <div
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  aria-current="true"
                  aria-label={`Slide ${index + 1}`}
                  className={index === 0 ? 'product-profile__bottom-div__image-div active' : 'product-profile__bottom-div__image-div'}
                >
                  <img src={itemImage} alt="product" />
                </div>
              ))
            }
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="product-profile__info-div">
            <div className="product-profile__info-item">
              <h5 className="product-profile__info-title">Name:</h5>
              <h5 className="product-profile__info-value">{data?.name || 'N/A'}</h5>
            </div>
            <div className="product-profile__info-item">
              <h5 className="product-profile__info-title">Price:</h5>
              <h5 className="product-profile__info-value">
                {data?.price ? `$${data?.price}` : 'N/A'}
              </h5>
            </div>
            <div className="product-profile__info-item">
              <h5 className="product-profile__info-title">Details:</h5>
              <h6 className="product-profile__info-value">{data?.detail || 'N/A'}</h6>
            </div>
            <div className="product-profile__info-item">
              <h5 className="product-profile__info-title">Vendor:</h5>
              <h5 className="product-profile__info-value">{data?.vendor?.displayName || 'N/A'}</h5>
            </div>
            <div className="product-profile__info-item">
              <h5 className="product-profile__info-title">Status:</h5>
              <h5 className="product-profile__info-value">{status || 'N/A'}</h5>
            </div>
          </div>
          <button
            className="product-profile__post-button success mt-3"
            type="button"
            onClick={handleNavigate}
          >
            View Vendor
          </button>
          {(status === 'pending') && (<button className="product-profile__post-button" type="button" onClick={handleShowPostModal}>Post Item</button>)}
          {(status === 'active') && (<button className="product-profile__post-button" type="button" onClick={handleShowBlockPostModal}>Block Item</button>)}
          {(status === 'blocked') && (<button className="product-profile__post-button" type="button" onClick={handleShow}>Unblock Item</button>)}
        </div>
      </div>

      <Modal show={showPostModal} onHide={handleClosePostModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>{`Post item ${data?.name}`}</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Are you sure you&apos;d want to post this item?</h5>
        </Modal.Body>
        <Modal.Footer>
          <button className="user-profile__modal__unsuspend-button" type="button" onClick={handlePost}>
            Yes, post item
          </button>
          <button className="user-profile__modal__close-button" type="button" onClick={handleClosePostModal}>
            No, close
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={showBlockPostModal} onHide={handleCloseBlockPostModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>{`Block item ${data?.name}`}</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Are you sure you&apos;d want to block this item?</h5>
        </Modal.Body>
        <Modal.Footer>
          <button className="user-profile__modal__unsuspend-button" type="button" onClick={handleBlock}>
            Yes, block item
          </button>
          <button className="user-profile__modal__close-button" type="button" onClick={handleCloseBlockPostModal}>
            No, close
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>{`Unblock item ${data?.name}`}</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Are you sure you&apos;d want to unblock this item?</h5>
        </Modal.Body>
        <Modal.Footer>
          <button className="user-profile__modal__suspend-button" type="button" onClick={handleUnblock}>
            Yes, unblock item
          </button>
          <button className="user-profile__modal__close-button" type="button" onClick={handleClose}>
            No, close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
