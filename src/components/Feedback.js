import React,{useState}from 'react'
import "../styles/Feedback.css";
function Feedback() {

    const input = () => {

    }
    const [arrow,setArrow]=useState('up')
    const [show,setShow] =useState('Show More')
    const [boolshow,setBoolShow]=useState(false)

    const Change = ()=>{
        if(boolshow===false){
            setShow('Show Less')
            setArrow('down')
            setBoolShow(!boolshow)
        }
        else{
            setShow('Show More')
            setArrow('up')
            setBoolShow(!boolshow)
        }

    }

    return (
        <>
            <div className="row Feedback mt-5 mb-5">
                <div className="col-12">
                    <h1 className="feedback-section">Send Us Your Feedback</h1>
                </div>
                <div className="col-12 col-lg-8 offset-sm-1">
                    <div className="row form-group  mt-3">
                        <label for="mobnum" className="col-12 col-md-3 col-form-label"><h6>Contact No.</h6></label>
                        <div className="col-4 col-md-2 offset-md-2">
                            <input type="number" className="form-control" id="countrycode" name="countrycode" placeholder="c. code" onChange={input} />
                        </div>
                        <div className="col-8 col-md-5">
                            <input type="tel" className="form-control" id="Mobnum" name="Mobnum" placeholder="Mob. number" onChange={input} />
                        </div>
                    </div>
                    <div className="from-group row mt-3">
                        <label for="emailid" className="col-12 col-md-3 col-form-label"><h6>Email</h6></label>
                        <div className="col-12 col-md-7 offset-md-2">
                            <input type="email" className="form-control" id="email" name="email" placeholder="enter your email" onChange={input} />
                        </div>
                    </div>
                    <div className="from-group row  mt-3">
                        <div className="col-9 col-md-6 offset-md-3 mt-2">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name="approve" id="approve" value="" onChange={input} />
                                <label className="form-check-label" for="approve">
                                    <strong>May we contact you?</strong>
                                </label>
                            </div>
                        </div>
                        <div className="col-3 col-md-3">
                            <select className="form-control">
                                <option>Mob.</option>
                                <option>Email</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row mt-3">
                        <label for="feedback" className="col-md-3 col-form-label"><h6>Your Feedback</h6></label>
                        <div className="col-md-9">
                            <textarea className="form-control" id="feedback" name="feedback" rows="5" onChange={input}></textarea>
                        </div>
                    </div>
                    <div className="form-group row mt-3">
                        <div className="offset-md-3 col-md-9">
                            <button type="submit" className="btn feedbackBtn" ><b>Send Feedback</b></button>
                        </div>
                    </div>
                </div>
                <span><h2>COMMENTS :</h2></span>
                <hr />
                <div className='row'>
                    <div className='offset-md-1 comment col-md-11 col-12'>
                        <div className='row'>
                            <div className='col-md-2 col-12'><span className="Namia">Parth Vyas ...</span></div>
                        </div>
                        <div className='row'>
                            <div className='commentContent offset-md-2 col-md-10 col-12'>
                                Kya Baat Bhai.. Tumhare pass itna time ha k comment padhoge ha...
                                Bhago aur padho varna jor se maar padegi ...
                            </div>

                        </div>
                    </div>
                    <div className='row'>
                        <div className=" offset-md-1 collapse col-md-11 col-12 comment collapseExample">
                            <div className='row'>
                                <div className='col-md-2 col-12'><span className="Namia">Parth Vyas ...</span></div>
                            </div>
                            <div className="row">
                                <div className='commentContent offset-md-2 col-md-10 col-12'>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div></div>
                        </div>
                        <div className=" offset-md-1 col-md-11 col-12 collapse comment collapseExample">
                            <div className='row'>
                                <div className='col-md-2 col-12'><span className="Namia">Parth Vyas ...</span></div>
                            </div>
                            <div className="row">
                                <div className='commentContent offset-md-2 col-md-10 col-12'>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div></div>
                        </div>
                    </div>

                    <p className='d-flex justify-content-center align-items-center'>
                        <a className='ShowMore' data-toggle="collapse" href=".collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" style={{ textDecoration: 'none' }}>
                            <div onClick={Change}>
                                <h4 id="ShowMore">{show}</h4><i className={`fa fa-2x fa-caret-${arrow}`} style={{ color: 'black' }}></i>
                            </div>
                        </a>

                    </p>


                </div>
                <hr />
                <div className="col-12 commentBox">
                    <textarea className="form-control" id="feedback" name="feedback" rows="5" placeholder='Enter your comment...' onChange={input}></textarea>
                    <div className="row" style={{ marginTop: '30px', marginBottom: '30px' }}>
                        <div className='offset-md-2 col-md-5 col-12'>
                            <h3 style={{ marginRight: '8px', display: 'inline' }}>Comment As:</h3>
                            <input type="text" placeholder="Enter your name" />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <button className="btn col-5 feedbackBtn offset-md-1 col-md-1" style={{ marginRight: '8px' }}><b>Publish</b></button>
                        <button className="btn col-5 offset-md-1 col-md-1" style={{ border: '1px solid black' }}>Preview</button>
                    </div>
                </div>
            </div>
            <div className="row mt-5"></div>

        </>
    )
}

export default Feedback
