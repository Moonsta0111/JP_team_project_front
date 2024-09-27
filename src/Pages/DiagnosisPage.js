// DiagnosisPage.js
import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const getWebcam = (callback) => {
  try {
    const constraints = {
      'video': true,
      'audio': false
    };
    navigator.mediaDevices.getUserMedia(constraints)
      .then(callback);
  } catch (err) {
    console.log(err);
  }
}

const Styles = {
  Video: { width: "100%", height: "100%", background: 'rgba(245, 240, 215, 0.5)', transform: 'scaleX(-1)' },
  None: { display: 'none' },
}

function DiagnosisPage() {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef(null);
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    if (playing) {
      getWebcam((stream) => {
        videoRef.current.srcObject = stream;
      });
    } else {
      if (videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
        videoRef.current.srcObject = null;
      }
    }
  }, [playing]);

  const startOrStop = () => {
    setPlaying(!playing);
  }

  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    
    // 이미지 파일로 변환 및 다운로드
    canvas.toBlob((blob) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'captured_image.png';
      link.click();
    });
  }

  return (
    <>
      <div title="캠" style={{ width: '100vw', height: '100vh', padding: '3em', textAlign: 'center' }}>
        <video ref={videoRef} autoPlay style={Styles.Video} />
        <div style={{ marginTop: '20px' }}>
          <Button color="warning" onClick={startOrStop}>
            {playing ? 'Stop' : 'Start'}
          </Button>
          <Button color="success" onClick={captureImage} disabled={!playing} style={{ marginLeft: '10px' }}>
            Capture Image
          </Button>
        </div>

        {/* 메인 페이지로 돌아가는 버튼 */}
        <div style={{ marginTop: '20px' }}>
          <Link to="/">
            <Button color="primary">
              메인페이지로 돌아가기
            </Button>
          </Link>
        </div>

        <canvas ref={canvasRef} style={Styles.None} width={640} height={480} />
      </div>
    </>
  );
}

export default DiagnosisPage;