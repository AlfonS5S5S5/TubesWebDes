function videoslider(videoFile) {
        var videoPlayer = document.getElementById("videoPlayer");
        videoPlayer.src = videoFile;
        videoPlayer.load();
        videoPlayer.play();
  }
