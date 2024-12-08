import React, { useEffect, useState } from "react";
import logo from "../assets/gardenlogo.png";
import bannerleft from "../assets/deneme.jpeg";
import SpecialMenu from "./specialmenus";

const garden = () => {
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

  {
    /*<img src={imageUrl} alt="Dish" className="menu-image" />*/
  }
  const izgaralar = [
    {
      name: "Izgara Köfte",
      price: 390,
      description: "",
    },
    {
      name: "Izgara Sucuk",
      price: 390,
      description: "",
    },
    {
      name: "Kuzu Pirzola",
      price: 600,
      description: "",
    },
    {
      name: "Antrikot",
      price: 600,
      description: "",
    },
    {
      name: "Izgara Kanat",
      price: 300,
      description: "",
    },
    {
      name: "Izgara İncik",
      price: 300,
      description: "",
    },
  ];

  const tavalar = [
    {
      name: "Menemen",
      price: 160,
      description: "",
    },
    {
      name: "Sahanda Yumurta",
      price: 160,
      description: "",
    },
    {
      name: "Sucuklu Yumurta",
      price: 160,
      description: "",
    },
  ];

  const atistirmaliklar = [
    {
      name: "Patates Tabağı",
      price: 125,
      description: "",
    },
    {
      name: "Çerez Tabağı",
      price: 250,
      description: "",
    },
    {
      name: "Meyve Tabağı",
      price: 300,
      description: "",
    },
    {
      name: "Otto Çıtır Tabağı",
      price: 250,
      description: "",
    },
  ];

  const tatlilar = [
    { name: "Tiramisu", price: 180, description: "" },
    { name: "Limonlu Cheesecake", price: 180, description: "" },
    { name: "Frambuazlı Pasta", price: 180, description: "" },
    { name: "Orman Meyveli Pasta", price: 180, description: "" },
    { name: "Fırın Sütlaç", price: 180, description: "" },
    { name: "Trileçe", price: 180, description: "" },
    { name: "Sansebastian", price: 200, description: "" },
    { name: "Otto Special Pasta", price: 200, description: "" },
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
    { name: "Ayran", price: 60, description: "" },
    { name: "Soda", price: 50, description: "" },
    { name: "Elmalı Soda", price: 60, description: "" },
    { name: "Limonlu Soda", price: 60, description: "" },
    { name: "Churchill", price: 60, description: "" },
    { name: "Redbull", price: 135, description: "" },
    { name: "Kola turka (L) ", price: 125, description: "" },
    { name: "Çamlıca portakal (L)", price: 125, description: "" },
    { name: "ŞALGAM (L) ", price: 125, description: "" },
    { name: "AYRAN (L) ", price: 125, description: "" },
  ];

  const premiumNargileler = [
    { name: "Freezone", price: 450, description: "" },
    { name: "Social Smoke", price: 550, description: "" },
  ];

  const tostlar = [
    { name: "Kaşarlı Tost", price: 120, description: "" },
    { name: "Karışık Tost", price: 130, description: "" },
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
    { name: "Duft", price: 650, description: "" },
    { name: "Darkside", price: 650, description: "" },
    { name: "Manterra", price: 550, description: "" },
    { name: "Revoshi", price: 550, description: "" },
    { name: "Paco", price: 550, description: "" },
  ];

  const ottoSpecialNargile = [
    { name: "Şikayetsiz", price: 370, description: "" },
    { name: "Boğaz Sefası", price: 370, description: "" },
    { name: "Şımarık", price: 370, description: "" },
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

  const salata = [
    { name: "Mevsim Salata", price: 200, description: "" },
    { name: "Çoban Salata", price: 200, description: "" },
  ];

  const ottoNSerisi = [
    { name: "Çift Elma", price: 345, description: "" },
    { name: "Şeftali", price: 345, description: "" },
    { name: "Cappuccino", price: 345, description: "" },
    { name: "Vişne", price: 345, description: "" },
  ];

  const sicakIcecekler = [
    { name: "Demleme Çay", price: 34, description: "" },
    { name: "Fincan Çay", price: 60, description: "" },
    { name: "Fincan Bitki Çayı", price: 95, description: "" },
    { name: "Sıcak Çikolata", price: 95, description: "" },
    { name: "Salep", price: 95, description: "" },
    { name: "Çikolatalı Salep", price: 110, description: "" },
    { name: "Küçük Demlik", price: 300, description: "" },
    { name: "Büyük Demlik", price: 550, description: "" },
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

  const sogukKahveler = [
    { name: "Ice Filtre Kahve", price: 110, description: "" },
    { name: "Ice Americano", price: 110, description: "" },
    { name: "Ice Chai Tea Latte", price: 125, description: "" },
    { name: "Ice Latte", price: 125, description: "" },
    { name: "Ice Caramel Latte", price: 125, description: "" },
    { name: "Ice Macchiato", price: 125, description: "" },
    { name: "Ice Mocha", price: 125, description: "" },
    { name: "Ice White Mocha", price: 125, description: "" },
    { name: "Cortado", price: 125, description: "" },
  ];

  const frappuccinoCesitleri = [
    { name: "Çikolatalı Frappuccino", price: 160, description: "" },
    { name: "Karamel Frappuccino", price: 160, description: "" },
    { name: "Vanilya Frappuccino", price: 160, description: "" },
  ];

  const limonatalar = [
    { name: "Sade Limonata", price: 95, description: "" },
    { name: "Karpuz Limonata", price: 105, description: "" },
    { name: "Mango Limonata", price: 105, description: "" },
    { name: "Nane Limonata", price: 105, description: "" },
    { name: "Çilek Limonata", price: 105, description: "" },
    { name: "Şeftali Limonata", price: 105, description: "" },
  ];

  const bubbleTeaCesitleri = [
    { name: "Ananas", price: 160, description: "" },
    { name: "Çilek", price: 160, description: "" },
    { name: "Hibiscus", price: 160, description: "" },
    { name: "Kahve", price: 160, description: "" },
  ];

  const smoothieCesitleri = [
    { name: "Kırmızı Orman Meyveleri", price: 160, description: "" },
    { name: "Mango", price: 160, description: "" },
    { name: "Şeftali", price: 160, description: "" },
    { name: "Çilek", price: 160, description: "" },
    { name: "Karpuz", price: 160, description: "" },
    { name: "Kivi", price: 160, description: "" },
    { name: "Muz", price: 160, description: "" },
  ];

  const milkshakeCesitleri = [
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

  const kokteyller = [
    { name: "Mojito", price: 190, description: "" },
    { name: "Tropikal", price: 190, description: "" },
    { name: "Big Boss", price: 190, description: "" },
    { name: "Pinacolada", price: 190, description: "" },
    { name: "Pineapple", price: 190, description: "" },
    { name: "Sprite Blossom", price: 210, description: "" },
    { name: "Otto Special Kokteyl", price: 210, description: "" },
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
          <a href="/ottomania-garden#nargile"> Nargileler</a>
        </div>
        <div>
          <a href="/ottomania-garden#sicak"> Sıcak İçecekler</a>
        </div>
        <div>
          <a href="/ottomania-garden#soguk"> Soğuk içecekler</a>
        </div>
        <div>
          <a href="/ottomania-garden#kokteyl"> Alkolsüz kokteyller</a>
        </div>
        <div>
          <a href="/ottomania-garden#izgara"> Izgaralar</a>
        </div>
        <div>
          <a href="/ottomania-garden#tava"> Tavalar</a>
        </div>
        <div>
          <a href="/ottomania-garden#salata"> Salatalar</a>
        </div>
        <div>
          <a href="/ottomania-garden#tatli"> Tatlılar</a>
        </div>
      </div>
      <div id="izgara"></div>
      <SpecialMenu
        title="Izgaralar"
        imageUrl={bannerleft}
        dishes={izgaralar}
      ></SpecialMenu>
      <div id="tava"></div>

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
      <div id="salata"></div>
      <SpecialMenu
        title="Salatalar"
        imageUrl={bannerleft}
        dishes={salata}
      ></SpecialMenu>
      <div id="tatli"></div>
      <SpecialMenu
        title="Tatlılar"
        imageUrl={bannerleft}
        dishes={tatlilar}
      ></SpecialMenu>
      <div id="sicak"></div>

      <SpecialMenu
        title="Sıcak İçecekler"
        imageUrl={bannerleft}
        dishes={sicakIcecekler}
      ></SpecialMenu>

      <SpecialMenu
        title="Sıcak Kahveler"
        imageUrl={sicakKahveler}
        dishes={sicakKahveler}
      ></SpecialMenu>
      <div id="soguk"></div>

      <SpecialMenu
        title="Soğuk İçecekler"
        imageUrl={bannerleft}
        dishes={sogukIcecekler}
      ></SpecialMenu>
      <SpecialMenu
        title="Soğuk Kahveler"
        imageUrl={sogukKahveler}
        dishes={sogukKahveler}
      ></SpecialMenu>

      <SpecialMenu
        title="Frappuccino Çeşitleri"
        imageUrl={bannerleft}
        dishes={frappuccinoCesitleri}
      ></SpecialMenu>

      <SpecialMenu
        title="Limonatalar"
        imageUrl={bannerleft}
        dishes={limonatalar}
      ></SpecialMenu>

      <SpecialMenu
        title="BubbleTea Çeşitleri"
        imageUrl={bannerleft}
        dishes={bubbleTeaCesitleri}
      ></SpecialMenu>

      <SpecialMenu
        title="Smothie Çeşitleri"
        imageUrl={sicakKahveler}
        dishes={smoothieCesitleri}
      ></SpecialMenu>
      <SpecialMenu
        title="Milkshae Çeşitleri"
        imageUrl={sogukKahveler}
        dishes={milkshakeCesitleri}
      ></SpecialMenu>

      <SpecialMenu
        title="Frozen Çeşitleri"
        imageUrl={bannerleft}
        dishes={frozenCesitleri}
      ></SpecialMenu>
      <div id="kokteyl"></div>

      <SpecialMenu
        title="Kokteyller"
        imageUrl={bannerleft}
        dishes={kokteyller}
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
        title="OTTO Special Nargileler"
        imageUrl={bannerleft}
        dishes={ottoSpecialNargile}
      ></SpecialMenu>

      <SpecialMenu
        title="OTTO Ice Tea Nargileler"
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

export default garden;
