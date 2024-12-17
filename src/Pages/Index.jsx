import React from 'react'

const Index = () => {
  return (
<>
  ***********************************--&gt;
  <div className="content-body">
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="card gradient-1">
            <div className="card-body">
              <h3 className="card-title text-white">Products Sold</h3>
              <div className="d-inline-block">
                <h2 className="text-white">4565</h2>
                <p className="text-white mb-0">Jan - March 2019</p>
              </div>
              <span className="float-right display-5 opacity-5">
                <i className="fa fa-shopping-cart" />
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card gradient-2">
            <div className="card-body">
              <h3 className="card-title text-white">Net Profit</h3>
              <div className="d-inline-block">
                <h2 className="text-white">$ 8541</h2>
                <p className="text-white mb-0">Jan - March 2019</p>
              </div>
              <span className="float-right display-5 opacity-5">
                <i className="fa fa-money" />
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card gradient-3">
            <div className="card-body">
              <h3 className="card-title text-white">New Customers</h3>
              <div className="d-inline-block">
                <h2 className="text-white">4565</h2>
                <p className="text-white mb-0">Jan - March 2019</p>
              </div>
              <span className="float-right display-5 opacity-5">
                <i className="fa fa-users" />
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card gradient-4">
            <div className="card-body">
              <h3 className="card-title text-white">Customer Satisfaction</h3>
              <div className="d-inline-block">
                <h2 className="text-white">99%</h2>
                <p className="text-white mb-0">Jan - March 2019</p>
              </div>
              <span className="float-right display-5 opacity-5">
                <i className="fa fa-heart" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body pb-0 d-flex justify-content-between">
                  <div>
                    <h4 className="mb-1">Product Sales</h4>
                    <p>Total Earnings of the Month</p>
                    <h3 className="m-0">$ 12,555</h3>
                  </div>
                  <div>
                    <ul>
                      <li className="d-inline-block mr-3">
                        <a className="text-dark" href="#">
                          Day
                        </a>
                      </li>
                      <li className="d-inline-block mr-3">
                        <a className="text-dark" href="#">
                          Week
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a className="text-dark" href="#">
                          Month
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="chart-wrapper">
                  <canvas id="chart_widget_2" />
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div className="w-100 mr-2">
                      <h6>Pixel 2</h6>
                      <div className="progress" style={{ height: 6 }}>
                        <div
                          className="progress-bar bg-danger"
                          style={{ width: "40%" }}
                        />
                      </div>
                    </div>
                    <div className="ml-2 w-100">
                      <h6>iPhone X</h6>
                      <div className="progress" style={{ height: 6 }}>
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: "80%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <img
                  src="./images/users/8.jpg"
                  className="rounded-circle"
                  alt=""
                />
                <h5 className="mt-3 mb-1">Ana Liem</h5>
                <p className="m-0">Senior Manager</p>
                {/* <a href="javascript:void()" class="btn btn-sm btn-warning">Send Message</a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <img
                  src="./images/users/5.jpg"
                  className="rounded-circle"
                  alt=""
                />
                <h5 className="mt-3 mb-1">John Abraham</h5>
                <p className="m-0">Store Manager</p>
                {/* <a href="javascript:void()" class="btn btn-sm btn-warning">Send Message</a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <img
                  src="./images/users/7.jpg"
                  className="rounded-circle"
                  alt=""
                />
                <h5 className="mt-3 mb-1">John Doe</h5>
                <p className="m-0">Sales Man</p>
                {/* <a href="javascript:void()" class="btn btn-sm btn-warning">Send Message</a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <img
                  src="./images/users/1.jpg"
                  className="rounded-circle"
                  alt=""
                />
                <h5 className="mt-3 mb-1">Mehedi Titas</h5>
                <p className="m-0">Online Marketer</p>
                {/* <a href="javascript:void()" class="btn btn-sm btn-warning">Send Message</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="active-member">
                <div className="table-responsive">
                  <table className="table table-xs mb-0">
                    <thead>
                      <tr>
                        <th>Customers</th>
                        <th>Product</th>
                        <th>Country</th>
                        <th>Status</th>
                        <th>Payment Method</th>
                        <th>Activity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="./images/avatar/1.jpg"
                            className=" rounded-circle mr-3"
                            alt=""
                          />
                          Sarah Smith
                        </td>
                        <td>iPhone X</td>
                        <td>
                          <span>United States</span>
                        </td>
                        <td>
                          <div>
                            <div className="progress" style={{ height: 6 }}>
                              <div
                                className="progress-bar bg-success"
                                style={{ width: "50%" }}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <i className="fa fa-circle-o text-success  mr-2" />{" "}
                          Paid
                        </td>
                        <td>
                          <span>Last Login</span>
                          <span className="m-0 pl-3">10 sec ago</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="./images/avatar/2.jpg"
                            className=" rounded-circle mr-3"
                            alt=""
                          />
                          Walter R.
                        </td>
                        <td>Pixel 2</td>
                        <td>
                          <span>Canada</span>
                        </td>
                        <td>
                          <div>
                            <div className="progress" style={{ height: 6 }}>
                              <div
                                className="progress-bar bg-success"
                                style={{ width: "50%" }}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <i className="fa fa-circle-o text-success  mr-2" />{" "}
                          Paid
                        </td>
                        <td>
                          <span>Last Login</span>
                          <span className="m-0 pl-3">50 sec ago</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="./images/avatar/3.jpg"
                            className=" rounded-circle mr-3"
                            alt=""
                          />
                          Andrew D.
                        </td>
                        <td>OnePlus</td>
                        <td>
                          <span>Germany</span>
                        </td>
                        <td>
                          <div>
                            <div className="progress" style={{ height: 6 }}>
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: "50%" }}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <i className="fa fa-circle-o text-warning  mr-2" />{" "}
                          Pending
                        </td>
                        <td>
                          <span>Last Login</span>
                          <span className="m-0 pl-3">10 sec ago</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="./images/avatar/6.jpg"
                            className=" rounded-circle mr-3"
                            alt=""
                          />{" "}
                          Megan S.
                        </td>
                        <td>Galaxy</td>
                        <td>
                          <span>Japan</span>
                        </td>
                        <td>
                          <div>
                            <div className="progress" style={{ height: 6 }}>
                              <div
                                className="progress-bar bg-success"
                                style={{ width: "50%" }}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <i className="fa fa-circle-o text-success  mr-2" />{" "}
                          Paid
                        </td>
                        <td>
                          <span>Last Login</span>
                          <span className="m-0 pl-3">10 sec ago</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="./images/avatar/4.jpg"
                            className=" rounded-circle mr-3"
                            alt=""
                          />{" "}
                          Doris R.
                        </td>
                        <td>Moto Z2</td>
                        <td>
                          <span>England</span>
                        </td>
                        <td>
                          <div>
                            <div className="progress" style={{ height: 6 }}>
                              <div
                                className="progress-bar bg-success"
                                style={{ width: "50%" }}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <i className="fa fa-circle-o text-success  mr-2" />{" "}
                          Paid
                        </td>
                        <td>
                          <span>Last Login</span>
                          <span className="m-0 pl-3">10 sec ago</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="./images/avatar/5.jpg"
                            className=" rounded-circle mr-3"
                            alt=""
                          />
                          Elizabeth W.
                        </td>
                        <td>Notebook Asus</td>
                        <td>
                          <span>China</span>
                        </td>
                        <td>
                          <div>
                            <div className="progress" style={{ height: 6 }}>
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: "50%" }}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <i className="fa fa-circle-o text-warning  mr-2" />{" "}
                          Pending
                        </td>
                        <td>
                          <span>Last Login</span>
                          <span className="m-0 pl-3">10 sec ago</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-sm-6 col-xxl-6">
          <div className="card">
            <div className="chart-wrapper mb-4">
              <div className="px-4 pt-4 d-flex justify-content-between">
                <div>
                  <h4>Sales Activities</h4>
                  <p>Last 6 Month</p>
                </div>
                <div>
                  <span>
                    <i className="fa fa-caret-up text-success" />
                  </span>
                  <h4 className="d-inline-block text-success">720</h4>
                  <p className=" text-danger">+120.5(5.0%)</p>
                </div>
              </div>
              <div>
                <canvas id="chart_widget_3" />
              </div>
            </div>
            <div className="card-body border-top pt-4">
              <div className="row">
                <div className="col-sm-6">
                  <ul>
                    <li>5% Negative Feedback</li>
                    <li>95% Positive Feedback</li>
                  </ul>
                  <div>
                    <h5>Customer Feedback</h5>
                    <h3>385749</h3>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div id="chart_widget_3_1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-sm-6 col-xxl-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Activity</h4>
              <div id="activity">
                <div className="media border-bottom-1 pt-3 pb-3">
                  <img
                    width={35}
                    src="./images/avatar/1.jpg"
                    className="mr-3 rounded-circle"
                  />
                  <div className="media-body">
                    <h5>Received New Order</h5>
                    <p className="mb-0">
                      I shared this on my fb wall a few months back,
                    </p>
                  </div>
                  <span className="text-muted ">April 24, 2018</span>
                </div>
                <div className="media border-bottom-1 pt-3 pb-3">
                  <img
                    width={35}
                    src="./images/avatar/2.jpg"
                    className="mr-3 rounded-circle"
                  />
                  <div className="media-body">
                    <h5>iPhone develered</h5>
                    <p className="mb-0">
                      I shared this on my fb wall a few months back,
                    </p>
                  </div>
                  <span className="text-muted ">April 24, 2018</span>
                </div>
                <div className="media border-bottom-1 pt-3 pb-3">
                  <img
                    width={35}
                    src="./images/avatar/2.jpg"
                    className="mr-3 rounded-circle"
                  />
                  <div className="media-body">
                    <h5>3 Order Pending</h5>
                    <p className="mb-0">
                      I shared this on my fb wall a few months back,
                    </p>
                  </div>
                  <span className="text-muted ">April 24, 2018</span>
                </div>
                <div className="media border-bottom-1 pt-3 pb-3">
                  <img
                    width={35}
                    src="./images/avatar/2.jpg"
                    className="mr-3 rounded-circle"
                  />
                  <div className="media-body">
                    <h5>Join new Manager</h5>
                    <p className="mb-0">
                      I shared this on my fb wall a few months back,
                    </p>
                  </div>
                  <span className="text-muted ">April 24, 2018</span>
                </div>
                <div className="media border-bottom-1 pt-3 pb-3">
                  <img
                    width={35}
                    src="./images/avatar/2.jpg"
                    className="mr-3 rounded-circle"
                  />
                  <div className="media-body">
                    <h5>Branch open 5 min Late</h5>
                    <p className="mb-0">
                      I shared this on my fb wall a few months back,
                    </p>
                  </div>
                  <span className="text-muted ">April 24, 2018</span>
                </div>
                <div className="media border-bottom-1 pt-3 pb-3">
                  <img
                    width={35}
                    src="./images/avatar/2.jpg"
                    className="mr-3 rounded-circle"
                  />
                  <div className="media-body">
                    <h5>New support ticket received</h5>
                    <p className="mb-0">
                      I shared this on my fb wall a few months back,
                    </p>
                  </div>
                  <span className="text-muted ">April 24, 2018</span>
                </div>
                <div className="media pt-3 pb-3">
                  <img
                    width={35}
                    src="./images/avatar/3.jpg"
                    className="mr-3 rounded-circle"
                  />
                  <div className="media-body">
                    <h5>Facebook Post 30 Comments</h5>
                    <p className="mb-0">
                      I shared this on my fb wall a few months back,
                    </p>
                  </div>
                  <span className="text-muted ">April 24, 2018</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12 col-sm-12 col-xxl-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-0">Store Location</h4>
              <div id="world-map" style={{ height: 470 }} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="social-graph-wrapper widget-facebook">
              <span className="s-icon">
                <i className="fa fa-facebook" />
              </span>
            </div>
            <div className="row">
              <div className="col-6 border-right">
                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                  <h4 className="m-1">89k</h4>
                  <p className="m-0">Friends</p>
                </div>
              </div>
              <div className="col-6">
                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                  <h4 className="m-1">119k</h4>
                  <p className="m-0">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="social-graph-wrapper widget-linkedin">
              <span className="s-icon">
                <i className="fa fa-linkedin" />
              </span>
            </div>
            <div className="row">
              <div className="col-6 border-right">
                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                  <h4 className="m-1">89k</h4>
                  <p className="m-0">Friends</p>
                </div>
              </div>
              <div className="col-6">
                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                  <h4 className="m-1">119k</h4>
                  <p className="m-0">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="social-graph-wrapper widget-googleplus">
              <span className="s-icon">
                <i className="fa fa-google-plus" />
              </span>
            </div>
            <div className="row">
              <div className="col-6 border-right">
                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                  <h4 className="m-1">89k</h4>
                  <p className="m-0">Friends</p>
                </div>
              </div>
              <div className="col-6">
                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                  <h4 className="m-1">119k</h4>
                  <p className="m-0">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="card">
            <div className="social-graph-wrapper widget-twitter">
              <span className="s-icon">
                <i className="fa fa-twitter" />
              </span>
            </div>
            <div className="row">
              <div className="col-6 border-right">
                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                  <h4 className="m-1">89k</h4>
                  <p className="m-0">Friends</p>
                </div>
              </div>
              <div className="col-6">
                <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                  <h4 className="m-1">119k</h4>
                  <p className="m-0">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* #/ container */}
  </div>


  <div className="footer">
  <div className="copyright">
    <p>
      Copyright © Designed &amp; Developed by{" "}
      <a href="https://themeforest.net/user/quixlab">Quixlab</a> 2018
    </p>
  </div>
</div>

</>

  )
}

export default Index
