import React from 'react';

const Services = () => {

  const services = [
    {
      id: 1,
      url:"/anniversary.jpg",
      title:"We provide venues for Wedding",

    },
    {
      id:2,
      url:"/camping.jpg",
      title:"Best Camping Heights",

    },
    {
      id: 3,
      url:"/party.jpg",
      title:"Party till you break the dance FLOOR!",

    },
    {
      id: 4,
      url:"/wedding.jpg",
      title:"Get Married at you dream destination",

    },
    {
      id: 5,
      url:"/birthday.jpg",
      title:"Memorable Birthday you will ever imagine",

    },
    {
      id: 6,
      url:"restaurant.jpg",
      title:"Delicious and indulging food",

    },
  ];
  return(
  <>
    <div className="Services Container">
      <h2>OUR SERVICES</h2>
      <div className="banner">
        {services.map((element) => {
            return(
              <div className="item" key = {element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title}/>
              </div>
            );
        })}
      </div>
    </div>
  </>
  );
}; 

export default Services