## Contact Us Page

This is a contact us page app which takes user's query and send the data to info@redpositive.in

## Installation

### Backend

Download the "Task_Backend" folder and open it in vscode.

```bash
  npm install
  npm run dev
```

### Frontend

Download the "Task_Frontend" folder and open it in vscode. 

```bash
  npm install
  npm run android
```

Now to establish communication between the backend server running on localhost on your desktop and the app running on your Android device, run the below command in the terminal after building the app.

```bash
  adb reverse tcp:4000 tcp:4000
```

This 'adb reverse' command is used to set up reverse port forwarding between a device and a computer. In this case, it forwards TCP traffic from port 4000 on the computer to port 4000 on the device.
