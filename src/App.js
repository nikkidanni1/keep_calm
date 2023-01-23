import React from 'react'
import Header from 'components/Header'
import GridSection from 'components/GridSection'
import SliderSection from 'components/SliderSection'
import Footer from 'components/Footer'

const dataGridSection1 = {
  title: 'ut aliquip ex ea commodo consequat',
  gridItems: [
    {
      id: 'id1',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageSrc: 'images/grid-1.jpg',
      detailsHTML: (
        <>
          Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          <br/><br/>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </>
      )
    },
    {
      id: 'id2',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageSrc: 'images/grid-2.jpg',
      detailsHTML: (
        <>
          Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          <br/><br/>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </>
      )
    },
  ]
}

const dataGridSection2 = {
  title: 'ut aliquip ex ea commodo consequat',
  gridItems: [
    {
      id: 'id1',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageSrc: 'images/grid-3.jpg',
      detailsHTML: (
        <>
          Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          <br/><br/>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </>
      )
    },
    {
      id: 'id2',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      imageSrc: 'images/grid-4.jpg',
      detailsHTML: (
        <>
          Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          <br/><br/>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </>
      )
    },
  ]
}

const sliderImages = [
  'images/slide-1.jpg', 
  'images/slide-2.jpg', 
  'images/slide-3.jpg', 
  'images/slide-4.jpg', 
  'images/slide-5.jpg', 
  'images/slide-6.jpg',
  'images/slide-7.jpg',
  'images/slide-8.jpg',
]

function App() {
  return (
    <>
      <Header />
      <GridSection data={dataGridSection1} />
      <SliderSection images={sliderImages} />
      <GridSection data={dataGridSection2} />
      <Footer />
    </>
  );
}

export default App;
