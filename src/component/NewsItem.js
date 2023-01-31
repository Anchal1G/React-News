import React from 'react'

const NewsItem =(props) =>{


    let {title,description,imgUrl,newsUrl,author,date} = props;
    return (
    <div className="card my-3" >
      <img src={imgUrl?imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBslAn2sF-HuAylxfcq0-ph68j695E3Cs3eAENnZzCxjkU4V4VAQsarP-hFyQEGiQxUIs&usqp=CAU"} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}...</p>
      <p className= "s"><small className='text-muted'> By {author?author:"Unknown"} on {new Date(date).toUTCString()} </small></p>
      <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-sm btn-secondary">Read More</a>
      </div>
    </div>
    )
  
}

export default NewsItem
