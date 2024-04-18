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

      4年ロンドン大学東洋アフリカ研究学院で日本学と韓国学を学び、2年ビデオゲーム業界で働いたのち、コーディングに戻す欲求を感じました。<br/>
            <br/>

      ソフトウェアエンジニアで勤めている間に通じて、ブラウザー拡張機能ツール、アフィリエイトトラキングプラグイン、CRUD APIなどの様々なプロジェクトを作成しています。<br/>
            <br/>
      
      DjangoやExpress.jsなどの技術でRESTとGraphQLバックエンドを作成する能力が高く、React.jsなどのフロントエンドフレームワークも扱えます。<br/>
            <br/>

      是非下のプロジェクトをご覧になり、自由にご連絡ください！
          </p>
      }
    </>
  )
}

export default AboutMe