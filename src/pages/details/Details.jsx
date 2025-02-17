import axios from 'axios'
import './details.scss'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SwiperCarousel from '../../components/carousels/SwiperCarousel'
import { add } from '../../redux/store/features/basketSlice'
import { useDispatch } from 'react-redux'
import { FiShoppingCart } from 'react-icons/fi'
import Rating from '@mui/material/Rating';
import Modal from '../../components/Modal'

const Details = ({userData}) => {
  const [dataItem, setDataItem] = useState({});
  const [value, setValue] = React.useState(0);
  const [comments, setComments] = useState([])
  const [open, setOpen] = useState(false);
  const params = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
    axios.get(`https://brendyol-fashion-backend.vercel.app/api/products/${params.id}`)
    .then(res => setDataItem(res.data))
    window.scrollTo(0,0)
  }, [])

  useEffect(() => {
    axios.get('https://brendyol-fashion-backend.vercel.app/api/rating')
    .then(res => setComments(res.data))
  }, [])

  const addProduct = (item) => {
    dispatch(add(item));
  }
  const openModal = (item) => {
    if(userData == null) {
      navigate('/login')
    }
    setOpen(true)
  }
  
  const productComments = comments.filter(comment => comment?.productId == dataItem._id)
  return (
    <div className='detail-page'>
      <div className='details-card'>
          <div className='details-card-img'>
            <SwiperCarousel dataItem={dataItem} />
          </div>
          <div className='details-card-about'>
              <div>
                <h4 className='details-card-about-title'>{dataItem?.title}</h4>  
                <p className='details-card-about-price'>{(dataItem?.price)?.toFixed(2)} $</p>
                <p>Stock: {dataItem?.stock}</p>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onClick={openModal}
                />
                <Modal open={open} setOpen={setOpen} productId={dataItem} userId={userData}/>
              </div>
              <div>
                <button className='details-card-about-addButton' onClick={() => addProduct(dataItem)}>
                  <FiShoppingCart/>
                  Add
                </button>
              </div>
          </div>
      </div>
      <div>
        {
          dataItem && dataItem.tags?.map((tag,i) =>  (
            <span key={i} style={{paddingLeft:'1rem', textTransform: 'uppercase'}}>{tag}</span>
          ))
        }
      </div>
      <div className='product-comment'>
        {
          comments && productComments.map(comment=> (
            <div className='product-comment-section' key={comment._id}>
              <div className='rate-div'>
                <p>{comment.rating}</p>
                <div>
                  <Rating name="read-only" value={comment.rating} readOnly size="large"/>
                </div>
              </div>
              <div className='user-comments'>
                <p className='user-name'>{comment.userName}</p>
                <p className='comment'>{comment.comment}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Details