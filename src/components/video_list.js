import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	/*
		building a loop, we can use maps to mimic loops in react.
		var array = [1, 2, 3];
		array.map(function(number) { return number*2 });
		output==> [2,4,6]
		array.map(function(number) { return '<div>'+number+'</div>' '});
		output==> ['<div>1</div>', '<div>1</div>', '<div>1</div>']
	*/


	const videoItems = props.videos.map((video) => {
		return <VideoListItem
			onVideoSelect={props.onVideoSelect} 
			key={video.etag} 
			video={video} />
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	)
};

export default VideoList;