import React, { useEffect, useState } from 'react';
import {
  arrayUnion, doc, getDoc, updateDoc, deleteDoc,
} from 'firebase/firestore';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import Carousel from './Carousel';
import { db } from '../../../config/firebaseConfig';

export default function ProductProfile() {
  const [data, setData] = useState(null);
  const [isPosting, setIsPosting] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);

  const handleClosePostModal = () => setShowPostModal(false);
  const handleShowPostModal = () => setShowPostModal(true);

  const navigate = useNavigate();
  const { id } = useParams();

  const handlePost = async () => {
    try {
      setIsPosting(true);
      const messageObj = {
        message: `Congratulations, your item, ${data?.name}, has been posted. It is now available to be viewed by all on this platform`,
        heading: 'Post Product',
        modifiedAt: Date.now(),
      };

      const vendorId = data?.vendorId || data?.vendor?.userId;

      const vendorRef = doc(db, 'vendors', vendorId);
      const productRef = doc(db, 'products', id);

      // await setDoc(productRef, { ...data, status: 'active', datePosted: Date.now() });

      await deleteDoc(doc(db, 'pendingItems', id));

      await updateDoc(vendorRef, {
        notifications: arrayUnion(messageObj),
      });

      await updateDoc(productRef, {
        status: 'active',
        datePosted: Date.now(),
      });

      navigate('/pending-items');
      handleClosePostModal();
      setIsPosting(false);
    } catch (err) {
      setIsPosting(false);
      handleClosePostModal();
      console.log(err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'pendingItems', id);
      console.log('pending id', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const product = docSnap.data();
        console.log('pending data -->', product);
        setData(product);
      } else {
        console.log('No such document!');
      }
    };

    fetchData();
  }, []);

  const handleNavigate = () => {
    const vendorId = data?.vendorId || data?.vendor?.userId;

    if (vendorId) {
      navigate(`/user/${vendorId}`);
    }
  };

  let itemImages = [];
  if (data?.images) { itemImages = data.images; }
  if (data?.length > 0) { itemImages = data.images; }

  return (
    <>
      <div className="row product-profile mt-0 g-3">
        <div className="col-6">
          <div className="product-profile__image-box">
            <div className="product-profile__top-div">
              <Carousel images={data?.images} />
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
              <h6 className="product-profile__info-value">{data?.details || 'N/A'}</h6>
            </div>
            <div className="product-profile__info-item">
              <h5 className="product-profile__info-title">Vendor:</h5>
              <h5 className="product-profile__info-value">{data?.vendor?.displayName || 'N/A'}</h5>
            </div>
            <div className="product-profile__info-item">
              <h5 className="product-profile__info-title">Status:</h5>
              <h5 className="product-profile__info-value">pending</h5>
            </div>
          </div>
          {(data?.vendorId || data?.vendor?.userId) && (
          <button
            className="product-profile__post-button mt-3"
            type="button"
            onClick={handleNavigate}
          >
            View Vendor
          </button>
          )}
          <button className="product-profile__post-button success" type="button" onClick={handleShowPostModal}>Post Item</button>
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
            {isPosting ? '...posting' : 'Yes, post item'}
          </button>
          <button className="user-profile__modal__close-button" type="button" onClick={handleClosePostModal}>
            No, close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
