import React,{useState} from 'react';




function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet delectus corporis iste non aperiam." },
    { id: 2, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet delectus corporis iste non aperiam." },
    { id: 3, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet delectus corporis iste non aperiam." },
    { id: 4, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet delectus corporis iste non aperiam." },
    { id: 5, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet delectus corporis iste non aperiam." },
    { id: 6, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet delectus corporis iste non aperiam." },
    { id: 7, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet delectus corporis iste non aperiam." },
    { id: 8, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet delectus corporis iste non aperiam." },
    { id: 9, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet delectus corporis iste non aperiam." },
    { id: 10, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eveniet delectus corporis iste non aperiam." },

  ]);

  const handleRemoveNotification = (notificationId) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== notificationId)
    );
  };


  return (
    <div className='notification' style={{
      backgroundColor: "white",
      maxWidth:"max-content",
      padding :"20px",
      borderRadius: "20px",
      margin:"auto",
      marginTop:"3rem"
      }}>

<h1>Notifications</h1>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>
              {notification.message}
              <button className='btn-Notif'
                onClick={() => handleRemoveNotification(notification.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notifications</p>
      )}
    </div>
  )
}

export default Notifications