import "./App.css"
import Menu from "./components/Menu"

function App() {
  let data = [
    {
      menuName: "Taylor Arbour",
      menuItems: [
        {
          itemId: 1,
          itemName: "Business Card",
          imgFile: ('images/image1.png'),
          itemDescription: "For a business card, click the button below!",
            
        },
        {
          itemId: 2,
          itemName: "Advanced Art",
          imgFile: 'images/sunflower.jpg',
          itemDescription: "This is a sunflower I made for a client, very detailed and time-consuming. I can most likely can design what you request!",
        },
        {
          itemId: 3,
          itemName: "Profile Slide",
          itemDescription:
            "A short and accurate PowerPoint slide that best describes you!",
        },
        {
          itemId: 45,
          itemName: "Personal Logo",
          itemDescription: "Need a personal logo for your photos, assignments, or just for fun? Request below!",
        },
        {
          itemId: 45,
          itemName: "Personalized Front Covers",
          itemDescription: "This is a Star Wars movie cover, I most likely can design what you request!",
        },
      ],
    },
    
  ]
  return (
    <div className="App">
      
      {data.map((menu) => (
        <Menu {...menu}></Menu>
      ))}
    </div>
    
  )
  
}
export default App