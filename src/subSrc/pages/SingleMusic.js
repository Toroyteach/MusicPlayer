import React, { useContext } from 'react'

import coverImage from './Music/music/Cover-Image.jpg'

//import necessary files to make state and context consistent
import appContext from '../services/context/appContext.js'

//import custom coments
import Comments from "../services/comments/Comments.js"

export default function SingleMusic() {

  // Global State
  const {
    astronomyPicture,
  } = useContext(appContext)


  return (
    <>
      <div className="row container_fluid">

        <section>
          <div className="card-body">
            <h4 className="card-title">Comments</h4>
          </div>
        </section>

        <div className="mb-4">

          <section className="border-bottom mb-4">
            <div className='d-flex justify-content-center'>
              <img src={astronomyPicture.url} alt={astronomyPicture.title}
                className="img-fluid shadow-2-strong rounded-5 mb-4" />
            </div>

          </section>


          <section className="text-center border-top border-bottom py-3 mb-4 card">

            <div className="row">
              <div className="col-md-4">
                <p><strong>Share with your friends:</strong></p>

                <button type="button" className="btn btn-primary me-1" style={{ backgroundColor: "#3b5998" }}>
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button type="button" className="btn btn-primary me-1" style={{ backgroundColor: "#55acee" }}>
                  <i className="fab fa-twitter"></i>
                </button>
                <button type="button" className="btn btn-primary me-1" style={{ backgroundColor: " ##bc2a8d" }}>
                  <i className="fab fa-instagram"></i>
                </button>
                <button type="button" className="btn btn-primary me-1" style={{ backgroundColor: " #25D366" }}>
                  <i className="fab fa-whatsapp"></i>
                </button>
              </div>
              <div className="col-md-8">
                <div className="stars">

                  <form action="">

                    <input className="star star-5" id="star-5" type="radio" name="star" />

                    <label className="star star-5" htmlFor="star-5"></label>

                    <input className="star star-4" id="star-4" type="radio" name="star" />

                    <label className="star star-4" htmlFor="star-4"></label>

                    <input className="star star-3" id="star-3" type="radio" name="star" />

                    <label className="star star-3" htmlFor="star-3"></label>

                    <input className="star star-2" id="star-2" type="radio" name="star" />

                    <label className="star star-2" htmlFor="star-2"></label>

                    <input className="star star-1" id="star-1" type="radio" name="star" />

                    <label className="star star-1" htmlFor="star-1"></label>

                  </form>

                </div>
              </div>
            </div>

          </section>


          <section className="border-bottom mb-4 py-3">

            <div className="card">
              <div className="row g-0">
                <div className="col-md-3">
                  <img src={coverImage} className="img-responsive rounded-start" alt="Magnifico" style={{ maxWidth: "80%", maxHeight: "auto" }} />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">Magnifico</h5>
                    <p className="card-text">I dont have any good descrioption to talk about this mix. While i was creating it i had thought of the word TNT to mean that it is an exploseive mix tape but
                      later on i came to change it to Magnifico which would come to hit me that i have named this mix item as some spectacular and am not so sure how the viewers or
                      the fans are going to persieve it if not enjoy it haha. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>
                  </div>
                </div>
              </div>
            </div>

          </section>


          <section class="gradient-custom">
            <div class="container my-5 py-5">
              <div class="row d-flex justify-content-center">

                <div class="col-md-12 col-lg-10 col-xl-10">
                  <div class="card">
                    <div class="card-body p-4">
                      <h4 class="text-center mb-4 pb-2">Liked what you heard? Leave a comment</h4>

                      <div class="row">
                        <div class="col">

                          <Comments commentsUrl="http://localhost:3004/comments" currentUserId="1"/>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>

      </div>
    </>
  )
}
