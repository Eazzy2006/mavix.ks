import React from "react"; // Create this CSS file

export default function Testimonial() {
    const testimonials = [
        {
          id: 1,
          name: "Adriatiki Home",
          quote: "Jam jashtëzakonisht i kënaqur me çdo dizajn që më është realizuar. Çdokush që vendos të bashkëpunojë me këtë ekip do të mbetet i kënaqur në çdo aspekt — profesionalizëm, kreativitet dhe cilësi e lartë në çdo detaj."
        },
        {
          id: 2,
          name: "Furniture Store",
          quote: "Jam shumë i kënaqur me punën që është bërë për mua. Jo vetëm që rezultati final më pëlqeu shumë, por edhe komunikimi gjatë gjithë procesit ishte i qartë dhe korrekt. Një përvojë vërtet profesionale dhe e besueshme. E rekomandoj me gjithë zemër!."
        },
        {
          id: 3,
          name: "R-M Dekor",
          quote: "Faleminderit shumë për punën e shkëlqyer! E keni bërë gjithçka në mënyrë perfekte dhe jam jashtëzakonisht i kënaqur me rezultatin. Shërbim profesional, korrektësi dhe përkushtim në çdo hap."
        },
        {
          id: 4,
          name: "Mobileria Dielli",
          quote: "Bravo, e keni realizuar projektin në mënyrë fantastike! Jam shumë i kënaqur me rezultatin dhe kam pasur shumë sukses pas përfundimit të tij. Faleminderit për profesionalizmin dhe përkushtimin tuaj – padyshim një bashkëpunim që ia vlen!"
        },
        {
          id: 5,
          name: "Adriatiki Home",
          quote: "Jam shumë i kënaqur me dizajnin tuaj – është realizuar aq mirë saqë mezi dalloj nëse është një kuzhinë reale apo jo! Detajet, cilësia dhe prezantimi janë thjesht të jashtëzakonshme. Një punë që tejkalon pritshmëritë!"
        },
        {
          id: 6,
          name: "Xhenis Beqiri",
          company: "Down Syndrome Kosova",
          quote: "Angazhimi i tyre përfshinte hapjen e llogarive në rrjetet sociale për promovimin e punëtorisë/kafenesë Bistro X21. Përveç hapjes së llogarive, ata i mirëmbajtën dhe i përditësuan rregullisht me përmbajtje promovuese, si foto dhe video, për të informuar publikun rreth punëtorisë së parë të këtij lloji në Mitrovicën e Jugut."
        }
      ];

  return (
    <div className="testimonial-container">
      <section className="testimonial-header">
        <h1 className="testih1">
        <a id="testimonialz"></a>
          Zërat e <br className="mobile"></br>  <span className="spani">Suksesit</span>
        </h1>
        <p className="subtitle"> <span className="spani"> Klientët tanë flasin për përvojën e tyre </span></p>
      </section>

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">{testimonial.quote}</p>
            <div className="testimonial-footer">
              <h3 className="client-name">{testimonial.name}</h3>
              <p className="client-company">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}