import React from 'react'
import './ExploreCarModel.css'
import { mau_list } from '../../assets/assets'

const ExploreCarModel = ({ category, setCategory }) => {
  return (
    <div className='explore-car-model' id='explore-car-model'>
      <h1>Khám phá mẫu xe của chúng tôi</h1>
      <p className='explore-car-model-text'>Người tiêu dùng không muốn một chiếc xe rẻ tiền, họ muốn có một chiếc xe hơi để phô trương. Một chiếc ô tô nói lên tình trạng và bản sắc cũng giống như phương tiện đi lại.</p>
      <div className="explore-car-model-list">
        {mau_list.map((item, index) => {
            return (
                <div onClick={() => setCategory(prev => prev === item.mau_name?"All" : item.mau_name)} key={index} className='explore-car-model-list-item'>
                    <img className={category === item.mau_name ? "active" : ""} src={item.mau_image} alt="" />
                    <p>{item.mau_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreCarModel
