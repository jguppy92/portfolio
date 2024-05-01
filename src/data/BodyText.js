export const heroText = {
  title: {
    en: 'James Guppy',
    jp: 'ジェームス・ガッピー',
  },
  subtitle: {
    en: 'Fullstack Software Engineer',
    jp: 'フルスタックソフトウェア開発者',
  },
}

export const aboutMeText = {
  subtitle: {
    en: 'I am a Fullstack Software Engineer with over two years professional experience.',
    jp: '2年以上職務経験があるソフトウェアエンジニア。',
  },
  en: `
  My journey into software development started in school when I picked up some Visual Basic and Pascal during an IT class and immediately fell in love with building simple applications and problem solving.<br/>
  <br/>

  After spending four years studying a degree in Japanese and Korean at SOAS, University of London, and two years working in the video game industry, I felt the itch to flex my brain again and return to coding.<br/>
  <br/>

  Throughout my time working as a developer I have built a range of projects from browser extension support tools to custom affiliate tracking solutions and CRUD APIs. I’m proficient at building RESTful and GraphQL backends in technologies such as Django and Express.js, as well using popular frontend frameworks like React.js.<br/>
  <br/>

  Check out my past and current projects below and feel free to get in touch!
`,
  jp: `
  ソフトウェア開発の前途は学校でVisual BasicやPascalを学んだときに始まり、直にシンプルなアプリ作成や問題解決が好きになりました。<br/>
<br/>

4年ロンドン大学東洋アフリカ研究学院で日本学と韓国学を学び、2年ビデオゲーム業界で働いたのち、コーディングに戻す欲求を感じました。<br/>
<br/>

ソフトウェアエンジニアで勤めている間に通じて、ブラウザー拡張機能ツール、アフィリエイトトラキングプラグイン、CRUD APIなどの様々なプロジェクトを作成しています。DjangoやExpress.jsなどの技術でRESTとGraphQLバックエンドを作成する能力が高く、React.jsなどのフロントエンドフレームワークも扱えます。<br/>
<br/>

是非下のプロジェクトをご覧になり、自由にご連絡ください！
`,
}

export const projects = [
  {
    title: 'Godzilla is Hungry',
    image: 'https://res.cloudinary.com/dodgizm5d/image/upload/v1633556256/jg-portfolio/godzilla-is-hungry-fullscreen.png',
    techIcons: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain'],
    enInfo: 'A PacMan clone built entirely in HTML5, CSS3 and Vanilla JavaScript over a seven day period as a solo project. The game features full player and enemy movement, player lives and score counter, multiple levels, enemies with different behaviours and toggleable audio.',
    jpInfo: '７日間のソロプロジェクトで、HTML５、CSS3、Vanilla JavaScriptを用いて作成したパックマンクローンゲームです。ゲームはプレイヤーキャラクターと敵の移動、プレイヤー命と点数カウンター、複数ステージ、様々な敵の行動や音楽のトグルボタンの機能があります。',
    deployedLink: 'https://jguppy92.github.io/sei-project-one/',
    github: 'https://github.com/jguppy92/sei-project-one',
  },
  {
    title: 'Scran',
    image: 'https://res.cloudinary.com/dodgizm5d/image/upload/v1633556815/jg-portfolio/scran.png',
    techIcons: ['devicon-sass-original', 'devicon-bulma-plain', 'devicon-react-original'],
    enInfo: 'A front end project that harnesses a third party API to produce a random meal for users. The project was built using React, Bulma and custom Sass in a group of three members. We produced this project as a 48 hour ‘hackathon’-style challenge. I focussed in particular on hooking up the core API functionality and the get random meal page.',
    jpInfo: '無作為にレシピを表示するために、第三者のAPIを使用しているフロントエンドプロジェクトです。３人のグループで、React、Bulma、Sassを用いて作成しました。４８時間の「Hackathon]のスタイルで開発しました。私は特に基礎のAPI機能の接続、無作為レシピページの作成に集中的に取り組みました。',
    deployedLink: 'https://scran.netlify.app/',
    github: 'https://github.com/jguppy92/sei-project-two',
  },
  {
    title: 'Away Days',
    image: 'https://res.cloudinary.com/dodgizm5d/image/upload/v1633556490/jg-portfolio/away-days-the-bill-nic.png',
    techIcons: ['devicon-sass-original', 'devicon-bootstrap-plain', 'devicon-react-original', 'devicon-express-original', 'devicon-mongodb-plain', 'devicon-nodejs-plain-wordmark'],
    enInfo: 'Full stack MERN web app with CRUD functionality. This was a group project with a seven day turn around period. I built the entire backend (including seed functions) as a REST API using Express and MongoDB. Front end was built in collaboration with two other group members using React and Bootstrap. In particular I built the register / login pages and the like / unlike functionality.',
    jpInfo: 'CRUD機能があるMERNフルスタックwebアプリです。グループプロジェクトで、７日間で開発しました。私はREST APIとして、ExpressやMongoDBでバックエンドを作成しました。フロントエンドは二人のグループメンバーと共同でReactやBootstrapで開発しました。フロントエンドに関して、私は特にサインアップページとライク・アンライクの機能を作成しました。',
    deployedLink: 'https://away-days0.netlify.app/',
    github: 'https://github.com/jguppy92/project-three-frontend',
  },
  {
    title: 'Find Floppas',
    image: 'https://res.cloudinary.com/dodgizm5d/image/upload/v1633557180/jg-portfolio/find-floppas.png',
    techIcons: ['devicon-sass-original', 'devicon-bulma-plain', 'devicon-react-original', 'devicon-django-plain', 'devicon-python-plain', 'devicon-postgresql-plain'],
    enInfo: 'A full stack web app heavily inspired by the likes of Tinder / Bumble. The backend was created using Python, Django, Django REST Framework and PostgreSQL, while the frontend was built using React and styled with Bulma and Sass. The project was completed within seven days with full user messaging and matching functionality and built entirely solo. Deployed to AWS via Amplify',
    jpInfo: 'TinderやBumbleなどのデートアプリにインスパイアされたフルスタックwebアプリです。バックエンドはPython、Django、Django REST FrameworkやPostgreSQLで作成し、フロントエンドはReact、Bulma、Sassなどで開発しました。このプロジェクトはメッセージとユーザーマッチング機能を含むもので、一人で7日間で作成しました。AmplifyでAWSにデプロイしました。',
    deployedLink: 'https://main.dx6uluq698zz6.amplifyapp.com/',
    github: 'https://github.com/jguppy92/project-four-frontend',
  }
]

export const interestsText = {
  languageLearning: {
    subtitle: {
      en: 'Language Learning',
      jp: '言語習得',
    },
    en: 'I speak business level Japanese and elementary level Korean and regularly keep up with my studies.',
    jp: '日本語をビジネスレベル、韓国語を初級レベルで喋ることができ、今でも力を入れて勉強しています。',
  },
  music: {
    subtitle: {
      en: 'Music',
      jp: '音楽',
    },
    en: 'I have been playing bass guitar for over ten years and have experience writing and recording my own music.',
    jp: '10年以上ベースを弾いており、自ら作曲・レコーディングした経験があります。',
  },
  bouldering: {
    subtitle: {
      en: 'Bouldering',
      jp: 'ボルダリング',
    },
    en: 'I have a huge love for indoor bouldering due to the physical challenge and problem-solving nature of the sport.',
    jp: 'インドアボルダリングの、フィジカルに挑戦的で問題解決を求められる性質に魅了され、情熱を持って取り組んでいます。',
  },
}