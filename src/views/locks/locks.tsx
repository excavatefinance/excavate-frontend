const myHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="index.css">
    <script src="index.js"></script>
    <title>Document</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.4/tailwind.min.css"
        integrity="sha512-paVHVRRhdoOu1nOXKnqDC1Vka0nh7FAmU3nsM4n2FKxOQTeF6crMdMfkVvEsuaOXZ6oEAVL5+wLbQcule/Xdag=="
        crossorigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.4/web3.min.js" integrity="sha512-TTGImODeszogiro9DUvleC9NJVnxO6M0+69nbM3YE9SYcVe4wZp2XYpELtcikuFZO9vjXNPyeoHAhS5DHzX1ZQ==" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

</head>

<body class="bg-blue">

    <div id="root" class="section-1">
        <div class="header ">
            <div class="container-fluid" style="position: absolute;">
                <nav class="navbar navbar-expand-lg navbar-light"><a href="/" class="navbar-brand"><img
                            src="Newlogo.fec30ca6.png" width="50" class="main_section_logo float_left logo mr-10">
                        <h3 class="white-color header-logo"> Reveal <span
                                class="header-logo yellow-color">Finance</span></h3>
                    </a><button aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation"
                        class="navbar-toggler collapsed"><span class="navbar-toggler-icon"></span></button>
                    <div class="navbar-collapse collapse" id="responsive-navbar-nav">
                        <div class="mr-auto navbar-nav"></div>
                        <div class="header-btn-link navbar-nav" style="display: contents;"><a href="/"
                                data-rb-event-key="/" class="nav-link"><svg class="MuiSvgIcon-root header-icon"
                                    focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                                </svg> Home</a><a href="/explore" data-rb-event-key="/explore" class="nav-link"><svg
                                    class="MuiSvgIcon-root header-icon" focusable="false" viewBox="0 0 24 24"
                                    aria-hidden="true">
                                    <path
                                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                    </path>
                                </svg> Explore</a><a href="/about" data-rb-event-key="/about" class="nav-link"><svg
                                    class="MuiSvgIcon-root header-icon" focusable="false" viewBox="0 0 24 24"
                                    aria-hidden="true">
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                                    </path>
                                </svg> About</a>
                            <a href="#" data-rb-event-key="/lockups" class="nav-link"><svg
                                    class="MuiSvgIcon-root header-icon" focusable="false" viewBox="0 0 24 24"
                                    aria-hidden="true">
                                    <path
                                        d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z">
                                    </path>
                                </svg> Lockup</a>
                            <div class="connect_btn_container"><button
                                    class="MuiButtonBase-root MuiButton-root MuiButton-text get-app-btn connect-btn" id="connectBtn" onclick="connect() "
                                    tabindex="0" type="button"><span class="MuiButton-label">Connect Wallet</span><span
                                        class="MuiTouchRipple-root"></span></button></div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <!-- <div>
      <div class="mob-d-none" style="width: 100%; left: 0px; top: 0px;"><img src="BannerImage.cf8a4699.png"
          class="responsive-img" height="auto" width="100%"></div>
      <div class="banner-full container-fluid">
        <div class="MuiGrid-root section-item MuiGrid-container">
          <class class="MuiGrid-root responseve-banner pl-15 MuiGrid-grid-xs-12 MuiGrid-grid-md-8">
            <div class="MuiGrid-root align-self pl-0 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12"
              style="margin-top: 50px;">
              <h2 class="white-color heading-h2"> <span class="yellow-color">Smart </span>Locks</h2>
            </div>
            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12">
              <p class="white-color">Liquidity Locking &amp; Team Vesting for Token Founders and Community</p>
            </div>
            <div class="MuiGrid-root align-self1 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
              <div class="MuiPaper-root MuiCard-root banner-section-card MuiPaper-elevation1 MuiPaper-rounded">
                <div class="float_left">
                  <div class="img-box"><img src="icon.png" alt="icon" class="icon-coin"></div>
                </div>
                <div>
                  <h1>$ 1188076.45</h1>
                  <p>Total Locked Value</p>
                </div>
              </div>
            </div>
          </class>

          <div class="MuiGrid-root banner-two-card MuiGrid-grid-xs-12 MuiGrid-grid-md-4">
            <div class="MuiGrid-root align-self1 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12">
              <div
                class="MuiPaper-root MuiCard-root banner-section-card token-card MuiPaper-elevation1 MuiPaper-rounded">
                <div class="float_left">
                  <div class="img-box"><img src="dollar.png" alt="icon" class="icon-coin"></div>
                </div>
                <div>
                  <h1>$ 37.48</h1>
                  <p>WLT Token Price</p>
                </div>
              </div>
            </div>
            <div class="MuiGrid-root align-self1 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12">
              <div class="MuiPaper-root MuiCard-root banner-section-card MuiPaper-elevation1 MuiPaper-rounded">
                <div class="float_left">
                  <div class="img-box"><img src="stairs.png
  " alt="icon" class="icon-coin"></div>
                </div>

                <div>
                  <h1>$ 2248570.21 </h1>
                  <p>Market Cap</p>
                </div>
              </div>
            </div>
          </div>

          <div style="float:right; margin-left: 1108px;"><button class="custom-btn-yello" style="float:right;">Buy
              Now</button></div>
        </div>
      </div>
    </div> -->
    </div>
    <div class="bg-blue-lighter pt-100">
        <div class="container">
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 class="title-font font-medium text-3xl text-gray-900" style="color:white">Create your own
                            custom token lock instantly.</h1>
                        <p class="leading-relaxed mt-4" style="color:white">All coins are locked into our audited smart
                            contract and can only be withdrawn by you after lock time expires.</p>
                            <br>
                            <br>

                            <button id="contractBtn">
                                <a href="https://www.bscscan.com/address/0x26b5bb09502174f3a2ed4c2d87db1197dee48396" style="text-decoration: none;" target="blank"><b>Explore Contract</b></a>
                            </button>
                    </div>
                    <div id="parentDiv"
                        class="lg:w-3/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h4 class="text-gray-900 text-lg font-medium title-font mb-5" style="padding-left: 10px; text-align: center;">Create
                            New Lock</h4>
                            <br>
                        <img id="dlt" src="./lock-tokens@3x.png" alt="" srcset="" width="100px" style="margin: auto;">
                        <p id="removePara" class="text-xs text-gray-500 mt-3" style="text-align: center; margin: auto; width: 400px;">
                            Select the type of token you would like to create a lock for.
                            You can create multiple locks with different settings for each one.</p>
                        <form class="relative mb-4" id="btnParentDiv">
                            <div class="btns" id="btns">
                                <button type="button" class="ant-btn ant-btn-block box-btn remove-btn"
                                    ant-click-animating-without-extra-node="false"
                                    style="border-color: rgb(28, 102, 220);">
                                    <div class="btn-container" style="padding:5px 10px 5px 10px;" ><img
                                            src="https://team.finance/assets/lockups/liquidity-locked@3x.png" alt="img" width="30px" style="margin-right: 10px;">
                                        <div class="content"  >
                                            <p class="lbl-top m-0" style="font-size:13px;" ><b>Liquidity Tokens</b></p>
                                            <p class="lbl-bottom m-0">LP Tokens generated from Pancakeswap Pool</p>
                                        </div>
                                        <input type="radio" value = "LP Tokens" name="Tokens" id="LP" style="margin-left: 130px;">
                                        <!-- <div class="icon-selected" style="border: 7px solid rgb(28, 102, 220);"></div> -->
                                    </div>
                                </button>
                                <br>
                                <br>
                                <button type="button" class="ant-btn ant-btn-block box-btn remove-btn" 
                                    ant-click-animating-without-extra-node="false"
                                    style="border-color: rgb(209, 212, 215);">
                                    <div class="btn-container" style="padding:5px 10px 5px 10px;"><img
                                            src="https://team.finance/assets/lockups/project-locked@3x.png" alt="img" width="30px" style="margin-right: 10px;">
                                        <div class="content">
                                            <p class="lbl-top m-0" style="font-size:13px;"><b>Project Tokens</b></p>
                                            <p class="lbl-bottom m-0">Regular BEP-20 Project Tokens</p>
                                        </div>
                                        <input type="radio" value = "Regular Tokens" name="Tokens" id="Regular" style="margin-left: 215px;">
                                        <!-- <div class="icon-selected" style="border: 1px solid rgb(209, 212, 215);"></div> -->
                                    </div>
                                </button></div>
                        </form>
                        <button
                            class="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg" style="width: 200px; margin: auto;" id="continueBtnChange" onclick="change()">Continue</button>
                    </div>
                </div>
            </section>
        </div>
        <div class="container">
            <div class="Locks">
                <h2 id="locks">My Locks</h2>
            </div>
            <div id="aprvbtn" class="detail">
                <br>
                <h3>No Locked Coins</h3>
                <br>
                <p>You have not locked up any coins yet.</p>
                <br>
            </div>
            <br>
        </div>
    </div>


    <id id="token" class="bg-blue-lighter pt-100">
        <!-- <div class="container">
      <div class="MuiGrid-root display-felx MuiGrid-container MuiGrid-spacing-xs-3">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2"></div>

        <div class="MuiGrid-root align-self MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-8">
          <h6 class="heading-xs text-center">TOKENS</h6>
          <p>&nbsp;</p>
          <h2 class="heading-xs text-center yellow-color">Reveal finance Use Cases</h2>
          <p class="white-color text-center">$WLT is the governance token of the REVEAL ecosystem. It is integral part
            of the ecosystem and will be used for following features and many more.</p>
        </div>

        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2"></div>
      </div>

      <div class="MuiGrid-root pb-30 MuiGrid-container MuiGrid-spacing-xs-3">
        <div class="MuiGrid-root mtb-20 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
          <div class="MuiPaper-root MuiCard-root countdown-box MuiPaper-elevation1 MuiPaper-rounded">
            <div class="p-30">
              <h5 class="yellow-color text-center">Reveal Finance</h5>
              <p class="white-color mb-5">Safe and trusted lockup for Projects to lock their Liquidity and Team tokens.
                Revenue generated from lockup fee will be used to buy back Wlt Tokens and will be distributed among Wlt
                holders.</p>
            </div>
          </div>
        </div>

        <div class="MuiGrid-root mtb-20 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
          <div class="MuiPaper-root MuiCard-root countdown-box MuiPaper-elevation1 MuiPaper-rounded">
            <div class="p-30">
              <h5 class="yellow-color text-center">Transfer fee</h5>
              <p class="white-color mb-5">1% transaction fee for every transaction is distributed among Wlt holders
                automatically</p>
            </div>
          </div>
        </div>

        <div class="MuiGrid-root mtb-20 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
          <div class="MuiPaper-root MuiCard-root countdown-box MuiPaper-elevation1 MuiPaper-rounded">
            <div class="p-30">
              <h5 class="yellow-color text-center">Reveal transfer</h5>
              <p class="white-color mb-5">Extra added fee of 1% with each sell order which goes upto maximum of 5% and
                is transferred to next Wlt buyer.</p>
            </div>
          </div>
        </div>

        <div class="MuiGrid-root mtb-20 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
          <div class="MuiPaper-root MuiCard-root countdown-box MuiPaper-elevation1 MuiPaper-rounded">
            <div class="p-30">
              <h5 class="yellow-color text-center">Bonus event</h5>
              <p class="white-color mb-5">Automatic eligibility for Claiming extra 100 Wlt tokens if you buy 500 Wlt
                tokens during the bonus event.</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    </id>
    </div>


    <!-- 
  <div class="pt-100 pb-60" style="background-color: rgb(12, 16, 48);">
    <div class="container">
      <div class="MuiGrid-root display-felx MuiGrid-container MuiGrid-spacing-xs-3">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
          <h3 class="yellow-color text-center mb-5">Initial Token Distribution</h3>
          <div class="small-w-100 w-80 m-auto"><img src="mobile-app.9b7249fb.png" width="100%"></div>
        </div>

        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
          <div class="small-w-100 w-80 m-auto rocket-video"><video autoplay="" loop=""
              style="width: 100%; left: 0px; top: 0px;">
              <source src="rocketFinalVideo.a0064e73.mov" type="video/mp4">
            </video></div>
        </div>
      </div>
    </div>
  </div> -->

    <div id="roadmap" class="bg-blue-lighter pt-100">
        <!-- <div class="container">
      <div class="MuiGrid-root display-felx MuiGrid-container MuiGrid-spacing-xs-3">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2"></div>
        <div class="MuiGrid-root align-self MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-8">
          <h6 class="heading-xs text-center">ROADMAP</h6>
          <p>&nbsp;</p>
          <h2 class="heading-xs text-center yellow-color">The Timeline</h2>
          <p class="white-color text-center">With help from our teams, contributors and investors these are the
            milestones we are looking forward to achieve.</p>
        </div>
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2"></div>
      </div>
      <div class="MuiGrid-root display-felx MuiGrid-container MuiGrid-spacing-xs-3">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-1"></div>
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2">
          <div class="single-roadmap-alt gradiant-ctob w-90">
            <h6>Reveal Tools</h6>
          </div>
        </div>
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2">
          <div class="single-roadmap-alt gradiant-ctob w-90">
            <h6>Reveal Pools</h6>
          </div>
        </div>
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2">
          <div class="single-roadmap-alt gradiant-ctob w-90">
            <h6>Reveal Launchpad</h6>
          </div>
        </div>
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2">
          <div class="single-roadmap-alt gradiant-ctob w-90">
            <h6>Reveal Staking Services</h6>
          </div>
        </div>
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2">
          <div class="single-roadmap-alt gradiant-ctob w-90">
            <h6>Reveal Dex</h6>
          </div>
        </div>
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-1"></div>
      </div>
    </div> -->
    </div>
    <div id="PancakeSwap" class="bg-blue-lighter pt-100">
        <!-- <div class="container">
      <div class="MuiGrid-root display-felx MuiGrid-container MuiGrid-spacing-xs-3">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2"></div>
        <div class="MuiGrid-root align-self MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-8">
          <h2 class="heading-xs text-center yellow-color">How to buy Reveal on Pancake Swap</h2>
        </div>
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2"></div>
      </div>
      <div class="MuiGrid-root display-felx MuiGrid-container MuiGrid-spacing-xs-3">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
          <p class="yellow-color font-bold">Using Metamask Wallet</p>
          <ul class="section-2-point">
            <li><a class="light-bue underline"
                href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"
                target="_blank">Connect BSC to Metamask</a></li>
            <li>BUY BNB from Binance </li>
            <li>Deposit BNB in your Wallet and While withdrawing use BSC CHAIN Network.</li>
            <li><a class="light-bue underline"
                href="https://exchange.pancakeswap.finance/?_gl=1*1f5xv4w*_ga*Njc0NDMxNzUxLjE2MTMxNjI1MTI.*_ga_334KNG3DMQ*MTYxNDA5MjE0NC4xMi4wLjE2MTQwOTIxNDYuMA..#/swap?inputCurrency=0xb7b262b0ac4939d8936685e20189d809bdb5dac6&amp;outputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
                target="_blank">Swap it on Pancake Swap.</a></li>
          </ul>
          <p class="yellow-color font-bold">Using trust wallet</p>
          <ul class="section-2-point">
            <li><a class="light-bue underline"
                href="https://community.trustwallet.com/t/how-to-swap-with-pancakeswap-in-trust-wallet/81848"
                target="_blank">Kindly go through this link to check how you can buy Reveal on PancakeSwap through Trust
                Wallet.</a></li>
          </ul>
          <div class="display_flex mb-5"><button
              class="MuiButtonBase-root MuiButton-root MuiButton-text get-app-btn submit-btn" tabindex="0"
              type="button"><span class="MuiButton-label">Connect Wallet</span><span
                class="MuiTouchRipple-root"></span></button></div>
          <p class="work-break white-color">Contract address will be used for Both Metamask and Trust Wallet.
          <p></p><span class="ml-10 white-color">0xb7b262b0Ac4939D8936685E20189D809BDB5daC6</span><span><a
              class="underline ml-10 light-bue" href="javascript:void(0)"><svg class="MuiSvgIcon-root" focusable="false"
                viewBox="0 0 24 24" aria-hidden="true">
                <path
                  id="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z">
                </path>
              </svg>Copy</a></span></p>
        </div>
        <div class="MuiGrid-root align-self pb-0 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6"><img
            src="mobile-app.b2862e66.png" width="100%"></div>
      </div>
    </div> -->
    </div>
    <!-- <div id="faq" class="pt-100">
    <div class="container">
      <div class="MuiGrid-root display-felx MuiGrid-container MuiGrid-spacing-xs-3">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2"></div>
        <div class="MuiGrid-root align-self MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-8">
          <h6 class="heading-xs text-center">FAQS</h6>
          <p>&nbsp;</p>
          <h2 class="heading-xs text-center yellow-color">Frequently Asked Questions</h2>
        </div>
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2"></div>
      </div>
      <div class="MuiGrid-root pb-60 MuiGrid-container MuiGrid-spacing-xs-2">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
          <div
            class="MuiButtonBase-root MuiListItem-root collapse-heading-container MuiListItem-gutters MuiListItem-button"
            tabindex="0" role="button" aria-disabled="false">
            <div class="MuiListItemText-root white-color font-bold"><span
                class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">How
                does the Reveal Ecosystem works?</span></div><svg class="MuiSvgIcon-root" focusable="false"
              viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg><span class="MuiTouchRipple-root"></span>
          </div>
        </div>
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
          <div
            class="MuiButtonBase-root MuiListItem-root collapse-heading-container MuiListItem-gutters MuiListItem-button"
            tabindex="0" role="button" aria-disabled="false">
            <div class="MuiListItemText-root white-color font-bold"><span
                class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">How do
                the smart contracts of token locking work?</span></div><svg class="MuiSvgIcon-root" focusable="false"
              viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg><span class="MuiTouchRipple-root"></span>
          </div>
        </div>
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
          <div
            class="MuiButtonBase-root MuiListItem-root collapse-heading-container MuiListItem-gutters MuiListItem-button"
            tabindex="0" role="button" aria-disabled="false">
            <div class="MuiListItemText-root white-color font-bold"><span
                class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">Do you
                Support only BEP20 tokens?</span></div><svg class="MuiSvgIcon-root" focusable="false"
              viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg><span class="MuiTouchRipple-root"></span>
          </div>
        </div>
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
          <div
            class="MuiButtonBase-root MuiListItem-root collapse-heading-container MuiListItem-gutters MuiListItem-button"
            tabindex="0" role="button" aria-disabled="false">
            <div class="MuiListItemText-root white-color font-bold"><span
                class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">Do you
                charge a fee to lock tokens in your ecosystem?</span></div><svg class="MuiSvgIcon-root"
              focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg><span class="MuiTouchRipple-root"></span>
          </div>
        </div>
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
          <div
            class="MuiButtonBase-root MuiListItem-root collapse-heading-container MuiListItem-gutters MuiListItem-button"
            tabindex="0" role="button" aria-disabled="false">
            <div class="MuiListItemText-root white-color font-bold"><span
                class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">What
                is the contract address of Reveal?</span></div><svg class="MuiSvgIcon-root" focusable="false"
              viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg><span class="MuiTouchRipple-root"></span>
          </div>
        </div>
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
          <div
            class="MuiButtonBase-root MuiListItem-root collapse-heading-container MuiListItem-gutters MuiListItem-button"
            tabindex="0" role="button" aria-disabled="false">
            <div class="MuiListItemText-root white-color font-bold"><span
                class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">How
                can I buy Reveal token?</span></div><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg><span class="MuiTouchRipple-root"></span>
          </div>
        </div>
      </div>
    </div>
  </div> -->
    <div id="contact" class="bg-blue-lighter section-pad-sm">
        <!-- <div class="container">
      <div class="MuiGrid-root display-felx MuiGrid-container MuiGrid-spacing-xs-3">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2"></div>
        <div class="MuiGrid-root align-self MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-8">
          <h6 class="heading-xs section-head-s2 text-center">CONTACT</h6>
          <p>&nbsp;</p>
          <h2 class="heading-xs text-center yellow-color">Get In Touch</h2>
        </div>
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2"></div>
      </div>
      <div class="MuiGrid-root display-felx MuiGrid-container MuiGrid-spacing-xs-3">
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
          <p class="white-color">Any question? Reach out to us and we�ll get back to you shortly.</p>
          <ul class="contact-info-alt">
            <li><a href="https://t.me/wealthlocks" target="_blank"><span class="circle-icon"><svg
                    class="MuiSvgIcon-root white-color" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z">
                    </path>
                  </svg></span><span class="white-color">Join us on Telegram</span></a></li>
            <li><a href="https://twitter.com/Wealthlocks?s=20" target="_blank"><span class="circle-icon"><svg
                    class="MuiSvgIcon-root white-color" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z">
                    </path>
                  </svg></span><span class="white-color">Join us on Twitter</span></a></li>
            <li><a href="mailto: Support@wealthlocks.io" target="_blank"><span class="circle-icon"><svg
                    class="MuiSvgIcon-root white-color" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z">
                    </path>
                  </svg></span><span class="white-color">Support@revealfinance.io</span></a></li>
            <li><a href="https://www.coingecko.com/en/coins/wealth-locks" target="_blank"><span><img
                    src="data:image/png;base64,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"
                    width="28" style="border-radius: 50px; margin-right: 6px;"></span><span
                  class="white-color">&nbsp;CoinGecko</span></a></li>
            <li><a href="https://coinmarketcap.com/currencies/wealthlocks/" target="_blank"><span><img
                    src="coinmarketcap.4e13a6fc.png" width="30"
                    style="border-radius: 50px; margin-right: 6px;"></span><span
                  class="white-color">&nbsp;CoinMarketCap</span></a></li>
          </ul>
        </div>
        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
          <form novalidate="" autocomplete="off">
            <div class="MuiFormControl-root MuiTextField-root contact-input w-100"><label
                class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"
                data-shrink="false" for="standard-basic" id="standard-basic-label">Your Name</label>
              <div
                class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                <input aria-invalid="false" id="standard-basic" type="text" class="MuiInputBase-input MuiInput-input"
                  value="">
              </div>
            </div>
            <div class="MuiFormControl-root MuiTextField-root contact-input w-100"><label
                class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"
                data-shrink="false" for="standard-basic" id="standard-basic-label">Your Email</label>
              <div
                class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                <input aria-invalid="false" id="standard-basic" type="text" class="MuiInputBase-input MuiInput-input"
                  value="">
              </div>
            </div>
            <div class="MuiFormControl-root MuiTextField-root contact-input w-100"><label
                class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated"
                data-shrink="false" for="standard-basic" id="standard-basic-label">Your Message</label>
              <div
                class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl MuiInputBase-multiline MuiInput-multiline">
                <textarea aria-invalid="false" id="standard-basic" rows="4"
                  class="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"></textarea>
              </div>
            </div>
            <div class="display_flex"><button class="MuiButtonBase-root MuiButton-root MuiButton-text submit-btn"
                tabindex="0" type="button"><span class="MuiButton-label">Submit</span><span
                  class="MuiTouchRipple-root"></span></button></div>
          </form>
        </div>
      </div>
    </div> -->
    </div>
    </div>
    </div>
    <div class="section-pad-sm footer-particle">
        <div class="container">
            <div class="MuiGrid-root display-felx MuiGrid-container MuiGrid-spacing-xs-3">
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3">
                    <div class="row">
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12">
                            <div class=" logo_heading"><span class="display_block"><img
                                        class="display_inline_block header_section_logo" src="Newlogo.fec30ca6.png">
                                    <h3 class="display_inline_block white-color small-logo-font">Reveal <span
                                            class="yellow-color h3">Finance</span></h3>
                                </span></div>
                        </div>
                    </div>
                </div>
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-1"></div>
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-8">
                    <div class="row m-0">
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-3">
                            <ul class="footer-link">
                                <li><b class="yellow-color">Platform</b></li>
                                <li><a href="/explore" class="menu-link">Explore</a></li>
                                <li><a href="/explore" class="menu-link">All Coins</a></li>
                                <li><a href="/about" class="menu-link">About</a></li>
                                <li><a href="/#PancakeSwap" class="menu-link">PancakeSwap</a></li>
                            </ul>
                        </div>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-3">
                            <ul class="footer-link">
                                <li><b class="yellow-color">Lockups</b></li>
                                <li><a href="/lockups" class="menu-link">Create Lock</a></li>
                                <li><a href="/lockups#token" class="menu-link">My Lockups</a></li>
                                <li><a href="/#PancakeSwap" class="menu-link">Help Locking</a></li>
                            </ul>
                        </div>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-3">
                            <ul class="footer-link">
                                <li><b class="yellow-color">Company</b></li>
                                <li><a href="/term-condition" class="menu-link">Terms &amp; Conditions</a></li>
                                <li><a href="/privacy-policy" class="menu-link">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-3">
                            <ul class="footer-link">
                                <li><b class="yellow-color">Connect</b></li>
                                <li><a href="https://t.me/wealthlocks" target="_blank" class="menu-link"><svg
                                            class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24"
                                            aria-hidden="true">
                                            <path
                                                d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z">
                                            </path>
                                        </svg> Telegram</a></li>
                                <li><a href="https://twitter.com/Wealthlocks?s=20" target="_blank"
                                        class="menu-link"><svg class="MuiSvgIcon-root" focusable="false"
                                            viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z">
                                            </path>
                                        </svg> Twitter</a></li>
                                <li><a href="https://medium.com/@wealthlocks" target="_blank" class="menu-link"><svg
                                            class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24"
                                            aria-hidden="true">
                                            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z">
                                            </path>
                                        </svg> Medium</a></li>
                                <li><a href="javascript:void(0)" class="menu-link"><svg class="MuiSvgIcon-root"
                                            focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z">
                                            </path>
                                        </svg> Email</a></li>
                                <li><a href="https://www.coingecko.com/en/coins/wealth-locks" target="_blank"><img
                                            src="data:image/png;base64,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"
                                            width="25" style="border-radius: 50px;">&nbsp;CoinGecko</a></li>
                                <li><a href="https://coinmarketcap.com/currencies/wealthlocks/" target="_blank"><img
                                            src="coinmarketcap.4e13a6fc.png" width="25"
                                            style="border-radius: 50px;">&nbsp;CoinMarketCap</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3">
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
                    <p class="white-color">� 2021 Excavate.Finance All Rights Reserved.</p>
                </div>
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6"></div>
            </div>
        </div>
    </div>
    
</body>

</html>`;

const App = () => <div>{myHTML}</div>;