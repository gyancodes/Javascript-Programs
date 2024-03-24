const heading = React.createElement(
  "h1",
  { id: "heading", title: "This is a title." },
  "My First React Element"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



// Web RTC Implementation

// function initializeWebRTC() {
//   // Create peer connection
//   const peerConnection = new RTCPeerConnection();

//   // Handle ICE candidates
//   peerConnection.onicecandidate = event => {
//     if (event.candidate) {
//       console.log("New ICE candidate:", event.candidate);
//     }
//   };

//   // Create offer
//   peerConnection.createOffer()
//     .then(offer => peerConnection.setLocalDescription(offer))
//     .then(() => {
//       // Send the offer to the remote peer through your signaling server
//       console.log("Offer created and set as local description:", peerConnection.localDescription);
//     })
//     .catch(error => console.error("Error creating offer:", error));

//   // Listen for remote session description
//   peerConnection.ontrack = event => {
//     console.log("Remote track received:", event.streams[0]);
//     // Attach the received media stream to an element in your DOM
//   };

//   // Add media track to connection
//   navigator.mediaDevices.getUserMedia({ audio: true, video: true })
//     .then(stream => {
//       stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
//     })
//     .catch(error => console.error("Error accessing media devices:", error));
// }

// // Call the function to initialize WebRTC
// initializeWebRTC();
