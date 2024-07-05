import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-nafta',
  templateUrl: './nafta.component.html',
  styleUrls: ['./nafta.component.css']
})
export class NaftaComponent implements OnInit {
  @ViewChild('videoElement', { static: true }) videoElement: ElementRef | null = null;
  @ViewChild('canvasElement', { static: true }) canvasElement: ElementRef | null = null;
  @ViewChild('returnedImg', { static: true }) returnedImg: ElementRef | null = null;

  constructor(private socket: Socket) { }

  ngOnInit() {
    this.startWebcam();
    this.connectWebSocket();
  }

  ngOnDestroy() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  startWebcam() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        this.videoElement!.nativeElement.srcObject = stream;
        this.videoElement!.nativeElement.play();
        this.sendVideoStream();
      })
      .catch(error => console.error('Error accessing webcam: ', error));
  }

  connectWebSocket() {
    // this.socket = new WebSocket('ws://localhost:5000/video');
    this.socket.on('video_stream', (event: any) => {
      // console.log('image received from server');
      // console.log(event);
      this.returnedImg!.nativeElement.src = 'data:image/jpeg;base64,' + event;
      
      // const blob = new Blob([event.data], { type: 'image/jpeg' });
      // const url = URL.createObjectURL(blob);
      // this.canvasReturned!.nativeElement.src = url;
      // this.renderBlobToCanvas(blob);
    });
  }

  renderBlobToCanvas(blob: any) {
    // const canvas = this.returnedImg!.nativeElement;
    // const context = canvas.getContext('2d');
    // const img = document.getElementById('returnedVideo');
    // Create a URL for the blob
    const url = URL.createObjectURL(blob);
    // Set the image source to the blob URL
    this.returnedImg!.nativeElement.src = url;
    // Release the object URL after the image has loaded
    this.returnedImg!.nativeElement!.onload = () => {
      URL.revokeObjectURL(url);
    };
    // Handle errors
    this.returnedImg!.nativeElement.onerror = (error: any) => {
      console.error('Error loading image from blob:', error);
      // Release the object URL in case of error
      URL.revokeObjectURL(url);
    };
  }

  sendVideoStream() {
    const canvas = this.canvasElement!.nativeElement;
    const context = canvas.getContext('2d');

    setInterval(() => {
      // console.log('sending image');
      context.drawImage(this.videoElement!.nativeElement, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob: any) => {
        this.socket.emit('video_stream',blob);
        // if (this.socket.ioSocket.readyState === WebSocket.OPEN) {
        // }
      }, 'image/jpeg');
    }, 500);
  }
}
