import React from "react";
import logo from "../assets/gardenlogo.png";
import bannerleft from "../assets/deneme.jpeg";
import SpecialMenu from "./specialmenus";

const garden = () => {
  {
    /*<img src={imageUrl} alt="Dish" className="menu-image" />*/
  }
  const izgaralar = [
    {
      name: "Izgara Köfte",
      price: 350,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Izgara Sucuk",
      price: 350,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Kuzu Pirzola",
      price: 600,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Antrikot",
      price: 600,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Izgara Kanat",
      price: 270,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Izgara İncik",
      price: 270,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
  ];
  {
    /*<img src={imageUrl} alt="Dish" className="menu-image" />*/
  }
  const tavalar = [
    {
      name: "Menemen",
      price: 160,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Sahanda Yumurta",
      price: 160,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Sucuklu Yumurta",
      price: 200,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Serpme Kahvaltı",
      price: 450,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
  ];
  {
    /*<img src={imageUrl} alt="Dish" className="menu-image" />*/
  }
  const atistirmaliklar = [
    {
      name: "Patates Tabağı",
      price: 125,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Çerez Tabağı",
      price: 200,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Meyve Tabağı",
      price: 250,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Otto Çıtır Tabağı",
      price: 225,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Risotto & Mushrooms",
      price: 30,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Fines Tartare Steak",
      price: 50,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Creamy Chicken Soup",
      price: 60,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Boiled Eggs on Toast",
      price: 10,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Best Roasted Rumpsteak",
      price: 110,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      name: "Risotto & Mushrooms",
      price: 30,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
  ];
  return (
    <div className="cafeContainer">
      <div className="cafe-header">
        <img src={logo} alt="" />
      </div>
      <div className="cafe-banner">
        <div className="hero-section">
          <div className="content">
            <p className="subheading">welcome to the delicious universe</p>
            <h1 className="heading">BEHIND THE DISHES</h1>
            <p className="description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <button className="btn">EXPLORE</button>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">About Us</h2>
        <div className="content-wrapper">
          <div className="image-column">
            <img src={bannerleft} alt="Traditional Dish" />
          </div>
          <div className="text-column">
            <p className="subheading">a taste of perfection</p>
            <h3 className="heading">TRADITIONAL & MODERN</h3>
            <p className="description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <button className="btn">READ MORE</button>
          </div>
          <div className="image-column">
            <img src={bannerleft} alt="Modern Dish" />
          </div>
        </div>
      </div>

      <SpecialMenu
        title="Izgaralar"
        imageUrl={bannerleft}
        dishes={izgaralar}
      ></SpecialMenu>

      <SpecialMenu
        title="Tavalar"
        imageUrl={bannerleft}
        dishes={tavalar}
      ></SpecialMenu>

      <SpecialMenu
        title="Atıştırmalıklar"
        imageUrl={bannerleft}
        dishes={atistirmaliklar}
      ></SpecialMenu>
    </div>
  );
};

export default garden;
