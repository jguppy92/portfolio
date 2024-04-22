import React from 'react'


function AboutMe({ isEnglish }) {
  return (
    <>
      {
        isEnglish ?
          <p className="text">
      My journey into software development started in school when I picked up some Visual Basic and Pascal during an IT class and immediately fell in love with building simple applications and problem solving.<br/>
            <br/>

      After spending four years studying a degree in Japanese and Korean at SOAS, University of London, and two years working in the video game industry, I felt the itch to return to coding.<br/>
            <br/>

      Throughout my time working as a developer I have built a range of projects from browser extension support tools to custom affiliate tracking solutions and CRUD APIs. I’m proficient at building RESTful and GraphQL backends in technologies such as Django and Express.js, as well using popular frontend frameworks like React.js.<br/>
            <br/>

	    Check out my past and current projects below and feel free to get in touch!
          </p> :
          <p className="text">
            ソフトウェア開発の前途は学校でVisual BasicやPascalを学んだときに始まり、直にシンプルなアプリ作成や問題解決が好きになりました。<br/>
            <br/>

            ロンドン大学東洋アフリカ研究学院で4年間日本学と韓国学を学び、その後2年間ビデオゲーム業界で働いたのち、コーディングに再び取り組む欲求を感じました。<br/>
            <br/>

            ソフトウェアエンジニアとしては、ブラウザー拡張機能ツール、アフィリエイトトラッキングプラグイン、CRUD APIなど、様々なプロジェクトを作成しました。<br/>
            <br/>
      
            DjangoやExpress.jsなどの技術でRESTとGraphQLバックエンドを作成する能力が高く、React.jsなどのフロントエンドフレームワークも扱えます。<br/>
            <br/>

            是非以下のプロジェクトをご覧になり、お気軽にご連絡ください！
          </p>
      }
    </>
  )
}

export default AboutMe