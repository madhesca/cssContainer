import React from "react"

function Container() {
  return (
    <div className="container">
      <div className="header">
        <img
          id="logo"
          alt="logo here"
          src="https://lh3.googleusercontent.com/proxy/BVzzDs4dzaaSVx1tzP9nE_5RNBOTzXQBGGfijvsDkn0XNwDzVn-510aaqT5YGG0pUetArAWJP_hsQgwbGGiLb7mkCvrqfmBRm3TuESilPTJD8Rq1BcwbFA"
        />
      </div>
      <div className="navBar"></div>
      <div className="sideBar"></div>
      <div className="main">
        <div className="box">
          <p className="china">
            <a href="https://en.wikipedia.org/wiki/Great_Wall_of_China">
              <img
                alt="Great Wall of China"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/240px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg"
                className="image"
              />
            </a>
          </p>
          <p>
            The Great Wall of China (Chinese: 萬里長城; pinyin: Wànlǐ
            Chángchéng) is the collective name of a series of fortification
            systems generally built across the historical northern borders of
            China to protect and consolidate territories of Chinese states and
            empires against various nomadic groups of the steppe and their
            polities. Several walls were being built from as early as the 7th
            century BC by ancient Chinese states;[2] selective stretches were
            later joined together by Qin Shi Huang (220–206 BC), the first
            emperor of China. Little of the Qin wall remains.[3] Later on, many
            successive dynasties have built and maintained multiple stretches of
            border walls. The most well-known sections of the wall were built by
            the Ming dynasty (1368–1644).
          </p>
        </div>
      </div>
    </div>
  )
}

export default Container
