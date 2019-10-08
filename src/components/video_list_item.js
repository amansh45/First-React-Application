// import React from 'react';

// const VideoListItem = (props) => {
// 	//const video = props.video;
// 	return <li>Video</li>;
// };

// export default VideoListItem;


import React from 'react';

const VideoListItem = (props) => {
	const video = props.video;
	const onVideoSelect = props.onVideoSelect;
	const imageUrl = video.snippet.thumbnails.default.url;
	
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img src={imageUrl} className="media-object" />
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>

			</div>
		</li>
	);
};

export default VideoListItem;