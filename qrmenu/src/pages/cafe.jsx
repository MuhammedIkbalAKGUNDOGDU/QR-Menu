import React, { useEffect, useState } from "react";
import logo from "../assets/cafe.png";
import bannerleft from "../assets/deneme.jpeg";
import SpecialMenu from "./specialmenus";

const cafe = () => {
  const [isMenuFixed, setIsMenuFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuFixed(window.scrollY > 900);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gotoEmail = () => {
    const email = "naccar2458@gmail.com";
    const subject = "Şikayet / Öneri";
    const body = "Öneri kısmı...";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  window.addEventListener("scroll", function () {
    const menu = document.getElementById("menu");
    const scrollY = window.scrollY;

    if (scrollY > 200) {
      // 200px kaydırma sonrası sabitle
      menu.classList.add("fixed");
    } else {
      menu.classList.remove("fixed");
    }
  });
  const sicakIcecekler = [
    { name: "Demleme Çay", price: 34, description: "" },
    { name: "Fincan Çay", price: 60, description: "" },
    { name: "Fincan Bitki Çayı", price: 95, description: "" },
    { name: "Sıcak Çikolata", price: 95, description: "" },
    { name: "Salep", price: 95, description: "" },
    { name: "Çikolatalı Salep", price: 110, description: "" },
  ];

  const sicakKahveler = [
    { name: "Türk Kahvesi", price: 70, description: "" },
    { name: "Espresso", price: 70, description: "" },
    { name: "Damla Sakızlı Türk Kahvesi", price: 80, description: "" },
    { name: "Menengiç Kahvesi", price: 80, description: "" },
    { name: "Osmanlı Kahvesi", price: 80, description: "" },
    { name: "Nescafe", price: 80, description: "" },
    { name: "Filtre Kahve", price: 90, description: "" },
    { name: "Americano", price: 95, description: "" },
    { name: "Double Espresso", price: 95, description: "" },
    { name: "Chai Tea Latte", price: 110, description: "" },
    { name: "Flat White", price: 110, description: "" },
    { name: "Cappuccino", price: 110, description: "" },
    { name: "Macchiato", price: 110, description: "" },
    { name: "Cafe Latte", price: 110, description: "" },
    { name: "Cafe Mocha", price: 110, description: "" },
    { name: "Cafe White Mocha", price: 110, description: "" },
  ];

  const limonatalar = [
    { name: "Sade Limonata", price: 95, description: "" },
    { name: "Karpuz Limonata", price: 105, description: "" },
    { name: "Mango Limonata", price: 105, description: "" },
    { name: "Nane Limonata", price: 105, description: "" },
    { name: "Çilek Limonata", price: 105, description: "" },
    { name: "Şeftali Limonata", price: 105, description: "" },
  ];

  const sogukIcecekler = [
    { name: "Su", price: 28, description: "" },
    { name: "Kola Turka", price: 80, description: "" },
    { name: "Çamlıca Portakal", price: 80, description: "" },
    { name: "Çamlıca Gazoz", price: 80, description: "" },
    { name: "Didi", price: 80, description: "" },
    { name: "Vişne Suyu", price: 80, description: "" },
    { name: "Şeftali Suyu", price: 80, description: "" },
    { name: "Karışık Meyve Suyu", price: 80, description: "" },
    { name: "Ayran", price: 80, description: "" },
    { name: "Soda", price: 50, description: "" },
    { name: "Elmalı Soda", price: 60, description: "" },
    { name: "Limonlu Soda", price: 60, description: "" },
    { name: "Churchill", price: 60, description: "" },
    { name: "Redbull", price: 135, description: "" },
  ];

  const sogukKahveler = [
    { name: "Ice Filtre Kahve", price: 110, description: "" },
    { name: "Ice Americano", price: 110, description: "" },
    { name: "Ice Latte", price: 125, description: "" },
    { name: "Ice Caramel Latte", price: 125, description: "" },
    { name: "Ice Macchiato", price: 125, description: "" },
    { name: "Ice Mocha", price: 125, description: "" },
    { name: "Ice White Mocha", price: 125, description: "" },
    { name: "Cortado", price: 125, description: "" },
    { name: "Ice Chai Tea Latte", price: 125, description: "" },
  ];

  const frappuccinos = [
    { name: "Çikolatalı Frappuccino", price: 160, description: "" },
    { name: "Karamel Frappuccino", price: 160, description: "" },
    { name: "Vanilya Frappuccino", price: 160, description: "" },
  ];

  const smoothies = [
    { name: "Kırmızı Orman Meyveleri", price: 160, description: "" },
    { name: "Mango", price: 160, description: "" },
    { name: "Şeftali", price: 160, description: "" },
    { name: "Çilek", price: 160, description: "" },
    { name: "Karpuz", price: 160, description: "" },
    { name: "Kivi", price: 160, description: "" },
    { name: "Muz", price: 160, description: "" },
  ];

  const milkshakes = [
    { name: "Çilek", price: 160, description: "" },
    { name: "Vanilya", price: 160, description: "" },
    { name: "Karamel", price: 160, description: "" },
    { name: "Çikolata", price: 160, description: "" },
    { name: "Muz", price: 160, description: "" },
  ];

  const frozenCesitleri = [
    { name: "Mango", price: 150, description: "" },
    { name: "Çilek", price: 150, description: "" },
    { name: "Karpuz", price: 150, description: "" },
    { name: "Kavun", price: 150, description: "" },
    { name: "Limon", price: 150, description: "" },
    { name: "Kivi", price: 150, description: "" },
    { name: "Şeftali", price: 150, description: "" },
    { name: "Orman Meyveli", price: 150, description: "" },
    { name: "Otto Special", price: 150, description: "" },
  ];

  const bubbleTea = [
    { name: "Ananas", price: 160, description: "" },
    { name: "Çilek", price: 160, description: "" },
    { name: "Hibiscus", price: 160, description: "" },
    { name: "Kahve", price: 160, description: "" },
  ];

  const kokteyller = [
    { name: "Mojito", price: 190, description: "" },
    { name: "Tropikal", price: 190, description: "" },
    { name: "Big Boss", price: 190, description: "" },
    { name: "Pina Colada", price: 190, description: "" },
    { name: "Pineapple", price: 190, description: "" },
    { name: "Sprite Blossom", price: 210, description: "" },
    { name: "Otto Special Kokteyl", price: 210, description: "" },
  ];

  const atistirmaliklar = [
    { name: "Patates Tabağı", price: 125, description: "" },
    { name: "Çerez Tabağı", price: 250, description: "" },
    { name: "Meyve Tabağı", price: 300, description: "" },
    { name: "Otto Çıtır Tabağı", price: 250, description: "" },
  ];

  const tostlar = [
    { name: "Kaşarlı Tost", price: 120, description: "" },
    { name: "Karışık Tost", price: 130, description: "" },
  ];

  const burgerler = [
    { name: "Chicken Burger", price: 290, description: "" },
    { name: "Hamburger", price: 300, description: "" },
    { name: "Cheese Burger", price: 320, description: "" },
    { name: "Double Cheese Burger", price: 400, description: "" },
    { name: "Otto Special Burger", price: 420, description: "" },
  ];

  const tavukYemekleri = [
    { name: "Ballı Susamlı Tavuk", price: 290, description: "" },
    { name: "Barbekü Soslu Tavuk", price: 290, description: "" },
    { name: "Chili Soslu Tavuk", price: 290, description: "" },
    { name: "Köri Soslu Tavuk", price: 290, description: "" },
    { name: "Kremalı Mantarlı Tavuk", price: 290, description: "" },
    { name: "Soya Soslu Tavuk", price: 290, description: "" },
    { name: "Otto Special Tavuk", price: 320, description: "" },
  ];

  const izgaralar = [
    { name: "Izgara Köfte", price: 390, description: "" },
    { name: "Izgara Tavuk", price: 290, description: "" },
  ];

  const makarnalar = [
    { name: "Fesleğenli Kremalı Mantarlı", price: 270, description: "" },
    { name: "Fettuccini Alfredo", price: 270, description: "" },
    { name: "Penne Arrabiata", price: 270, description: "" },
    { name: "Pesto Soslu", price: 270, description: "" },
  ];

  const salatalar = [
    { name: "Mevsim Salata", price: 200, description: "" },
    { name: "Peynirli Salata", price: 225, description: "" },
    { name: "Tavuklu Salata", price: 275, description: "" },
    { name: "Ton Balıklı Salata", price: 270, description: "" },
  ];

  const tatlilar = [
    { name: "Tiramisu", price: 180, description: "" },
    { name: "Limonlu Cheesecake", price: 180, description: "" },
    { name: "Frambuazlı Pasta", price: 180, description: "" },
    { name: "Orman Meyveli Pasta", price: 180, description: "" },
    { name: "Sansebastian", price: 200, description: "" },
    { name: "Otto Special Pasta", price: 200, description: "" },
  ];

  const premiumNargileler = [
    { name: "Freezone", price: 450, description: "" },
    { name: "Social Smoke", price: 550, description: "" },
  ];

  const naturalNargileler = [
    { name: "Full Natural Nargile", price: 1250, description: "" },
    { name: "Otto Natural Nargile", price: 750, description: "" },
  ];

  const ottoKlasikNargile = [
    { name: "Otto Klasik Nargile", price: 345, description: "" },
    { name: "Kafa", price: 220, description: "" },
    { name: "Buz", price: 70, description: "" },
  ];

  const darkSerisi = [
    { name: "Bonche", price: 700, description: "" },
    { name: "Kraken", price: 700, description: "" },
    { name: "Tangiers", price: 650, description: "" },
    { name: "Brusko", price: 650, description: "" },
    { name: "Spectrum", price: 650, description: "" },
    { name: "Musthave", price: 650, description: "" },
    { name: "Satyr", price: 650, description: "" },
    { name: "Dozaj", price: 650, description: "" },
    { name: "Aircraft", price: 650, description: "" },
    { name: "Mattpear", price: 650, description: "" },
    { name: "Jam", price: 650, description: "" },
    { name: "Duft", price: 650, description: "" },
    { name: "Darkside", price: 650, description: "" },
    { name: "Manterra", price: 550, description: "" },
    { name: "Revoshi", price: 550, description: "" },
    { name: "Buta", price: 550, description: "" },
  ];

  const ottoSpecialNargile = [
    { name: "Şikayetsiz", price: 370, description: "" },
    { name: "Boğaz Sefası", price: 370, description: "" },
    { name: "Sımarık", price: 370, description: "" },
    { name: "Otto Special", price: 370, description: "" },
    { name: "Blueberry", price: 370, description: "" },
    { name: "Fresh Mix", price: 370, description: "" },
    { name: "Mint Cream", price: 370, description: "" },
    { name: "Cici Bebe", price: 370, description: "" },
    { name: "Petibör", price: 370, description: "" },
    { name: "Çift Elma Special", price: 370, description: "" },
  ];

  const ottoIceTeaSerisi = [
    { name: "Jibiar", price: 395, description: "" },
    { name: "Adalya", price: 395, description: "" },
  ];

  const ottoNSerisi = [
    { name: "Çift Elma", price: 345, description: "" },
    { name: "Şeftali", price: 345, description: "" },
    { name: "Cappuccino", price: 345, description: "" },
    { name: "Vişne", price: 345, description: "" },
  ];

  return (
    <div className="cafeContainer">
      <div className="cafe-banner">
        <div className="hero-section">
          <div className="content">
            <img className="logo-1" src={logo} alt="" />
            <h1 className="heading">OTTOMANIA</h1>
            <p className="description">Nargilede Yeni Bir Dünya</p>
          </div>
        </div>
      </div>
      <div className="cvv">
        <div>Fiyatlarımıza KDV dahildir</div>
        <div> Son Fiyat Güncellemesi (15.11.2024)</div>
      </div>
      <div className="about-section">
        <h2 className="section-title">Menü</h2>
      </div>
      <div className={isMenuFixed ? "fixed" : "fix-menu"}>
        <div>
          <a href="/ottomania-cafe#nargile"> Nargileler</a>
        </div>
        <div>
          <a href="/ottomania-cafe#sicak"> Sıcak İçecekler</a>
        </div>
        <div>
          <a href="/ottomania-cafe#soguk"> Soğuk içecekler</a>
        </div>
        
        <div>
          <a href="/ottomania-cafe#izgara"> Izgaralar</a>
        </div>
        <div>
          <a href="/ottomania-cafe#salata"> Salatalar</a>
        </div>
        <div>
          <a href="/ottomania-cafe#tost"> Tostlar </a>
        </div>
        <div>
          <a href="/ottomania-cafe#tatli"> Tatlılar</a>
        </div>
        <div>
          <a href="/ottomania-cafe#kokteyl"> Alkolsüz kokteyller</a>
        </div>
      </div>

      <div id="sicak"></div>
      <SpecialMenu
        title="Sıcak İçecekler"
        imageUrl={bannerleft}
        dishes={sicakIcecekler}
      ></SpecialMenu>
      <SpecialMenu
        title="Sıcak Kahveler"
        imageUrl={bannerleft}
        dishes={sicakKahveler}
      ></SpecialMenu>
      <div id="soguk"></div>
      <SpecialMenu
        title="Limonatalar"
        imageUrl={bannerleft}
        dishes={limonatalar}
      ></SpecialMenu>
      <SpecialMenu
        title="Soğuk İçecekler"
        imageUrl={bannerleft}
        dishes={sogukIcecekler}
      ></SpecialMenu>
      <SpecialMenu
        title="Soğuk Kahveler"
        imageUrl={bannerleft}
        dishes={sogukKahveler}
      ></SpecialMenu>
      <SpecialMenu
        title="Frappuccino Çeşitleri"
        imageUrl={bannerleft}
        dishes={frappuccinos}
      ></SpecialMenu>
      <SpecialMenu
        title="Smothie Çeşitleri"
        imageUrl={bannerleft}
        dishes={smoothies}
      ></SpecialMenu>
      <SpecialMenu
        title="Milkshake Çeşitleri"
        imageUrl={bannerleft}
        dishes={milkshakes}
      ></SpecialMenu>
      <SpecialMenu
        title="Frozen Çeşitleri"
        imageUrl={bannerleft}
        dishes={frozenCesitleri}
      ></SpecialMenu>
      <SpecialMenu
        title="Bubble Tea Çeşitleri"
        imageUrl={bannerleft}
        dishes={bubbleTea}
      ></SpecialMenu>
      <div id="kokteyl"></div>

      <SpecialMenu
        title="Kokteyller"
        imageUrl={bannerleft}
        dishes={kokteyller}
      ></SpecialMenu>
      <div id="tost"></div>

      <SpecialMenu
        title="Atıştırmalıklar"
        imageUrl={bannerleft}
        dishes={atistirmaliklar}
      ></SpecialMenu>
      <SpecialMenu
        title="Tostlar"
        imageUrl={bannerleft}
        dishes={tostlar}
      ></SpecialMenu>
      <SpecialMenu
        title="Burgerler"
        imageUrl={bannerleft}
        dishes={burgerler}
      ></SpecialMenu>
      <SpecialMenu
        title="Tavuk Yemekleri"
        imageUrl={bannerleft}
        dishes={tavukYemekleri}
      ></SpecialMenu>
      <div id="izgara"></div>

      <SpecialMenu
        title="Izgaralar"
        imageUrl={bannerleft}
        dishes={izgaralar}
      ></SpecialMenu>
      <SpecialMenu
        title="Makarnalar"
        imageUrl={bannerleft}
        dishes={makarnalar}
      ></SpecialMenu>
      <div id="salata"></div>

      <SpecialMenu
        title="Salatalar"
        imageUrl={bannerleft}
        dishes={salatalar}
      ></SpecialMenu>
      <div id="tatli"></div>

      <SpecialMenu
        title="Tatlılar"
        imageUrl={bannerleft}
        dishes={tatlilar}
      ></SpecialMenu>
      <div id="nargile"></div>

      <SpecialMenu
        title="Premium Nargileler"
        imageUrl={bannerleft}
        dishes={premiumNargileler}
      ></SpecialMenu>
      <SpecialMenu
        title="Natural Nargileler"
        imageUrl={bannerleft}
        dishes={naturalNargileler}
      ></SpecialMenu>
      <SpecialMenu
        title="OTTO Klasik Nargile"
        imageUrl={bannerleft}
        dishes={ottoKlasikNargile}
      ></SpecialMenu>
      <SpecialMenu
        title="Dark Serisi"
        imageUrl={bannerleft}
        dishes={darkSerisi}
      ></SpecialMenu>
      <SpecialMenu
        title="OTTO Special Nargile"
        imageUrl={bannerleft}
        dishes={ottoSpecialNargile}
      ></SpecialMenu>
      <SpecialMenu
        title="OTTO Ice Tea Serisi"
        imageUrl={bannerleft}
        dishes={ottoIceTeaSerisi}
      ></SpecialMenu>
      <SpecialMenu
        title="OTTO N Serisi"
        imageUrl={bannerleft}
        dishes={ottoNSerisi}
      ></SpecialMenu>
      <div className="oneri">
        <div onClick={gotoEmail} className="oneri-btn">
          Şikayet/Öneri
        </div>
      </div>
    </div>
  );
};

export default cafe;
