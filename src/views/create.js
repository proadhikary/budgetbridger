import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './create.css'

const Create = (props) => {
  return (
    <div className="create-container">
      <Helmet>
        <title>Create - Budget Bridger</title>
        <meta property="og:title" content="Create - Budget Bridger" />
      </Helmet>
      <div className="create-navbar navbar-container">
        <div className="create-max-width max-width">
          <div className="create-container01">
            <Link to="/" className="create-navlink">
              <img alt="image" src="/logo.svg" className="create-image" />
            </Link>
            <div className="create-logo"></div>
          </div>
          <div className="create-links">
            <Link to="/dashboard" className="create-navlink1">
              <div className="create-container02">
                <img alt="image" src="/vector2.svg" className="create-image1" />
                <span className="create-text">Dashboard</span>
              </div>
            </Link>
            <Link to="/create" className="create-navlink2">
              <div className="create-container03">
                <img alt="image" src="/vector3.svg" className="create-image2" />
                <span className="create-text1">Create Expense</span>
              </div>
            </Link>
            <Link to="/" className="create-navlink3">
              <div className="create-container04">
                <img alt="image" src="/vector4.svg" className="create-image3" />
                <span className="create-text2">Logout</span>
              </div>
            </Link>
            <img alt="image" src="/dp-200h.png" className="create-image4" />
          </div>
          <div className="create-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="create-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="create-section section-container">
        <div className="create-container05">
          <div className="create-container06"></div>
        </div>
        <div className="create-container07">
          <span className="create-text3">Create Expense</span>
          <span className="create-text4">Create a new expense</span>
          <form
            action="submit"
            method="post"
            enctype="application/x-www-form-urlencoded"
            className="create-form"
          >
            <div className="create-container08">
              <span className="create-text5">Event *</span>
              <input type="text" required className="create-input input" />
            </div>
            <div className="create-container09">
              <span className="create-text6">Number of People *</span>
              <input type="text" required className="create-input1 input" />
            </div>
            <div className="create-container10">
              <div className="create-container11">
                <span className="create-text7">Report Cost *</span>
                <input type="text" required className="create-input2 input" />
              </div>
              <span className="create-text8">Upload Bills</span>
              <div className="create-container12">
                <div className="create-container13">
                  <Script
                    html={`<link rel="stylesheet" href="https://unpkg.com/@adminkit/core@latest/dist/css/app.css">
<script src="https://unpkg.com/@adminkit/core@latest/dist/js/app.js"></script>

<div class="mb-3">
  <input class="form-control form-control-lg" type="file" id="formFileMultiple" multiple>
</div>`}
                  ></Script>
                </div>
              </div>
            </div>
            <Link to="/dashboard" className="create-navlink4 button">
              Save Expense
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
