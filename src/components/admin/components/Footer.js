import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className="footer py-4  ">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-sm text-muted text-lg-start">
                © <script>
                  document.write(new Date().getFullYear())
                </script>
                Created with <i className="fa fa-heart"></i> by
                <a href="https://bellenorthedynamics.com" className="font-weight-bold" target="_blank"> Toroyteach </a>
                for a cool You.
              </div>
            </div>
            <div className="col-lg-6">
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
