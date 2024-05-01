import Accordion from 'react-bootstrap/Accordion';

function Villkor() {
  return (
    <>
    <h1 style={{marginTop: '15px'}}>Villkor</h1>
    <p>Våra villkor är en del av ditt avtal med oss. I våra villkor nedan kan du läsa vad som gäller i nuläget.</p>
    <p>Allmänna villkor för Besiktningsval
    </p>

    <Accordion style={{width: '80%', margin: '0 auto', marginBottom: '20px'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. Allmänt</Accordion.Header>
        <Accordion.Body>
          1.1 Genom att använda Tjänsten bekräftar användaren att denne har tagit del av de Allmänna Villkoren och att denne accepterar dessa.

          1.2 Besiktningsval har ensidigt rätt att ändra de Allmänna Villkoren. Eventuella ändringar träder i kraft tidigast från och med att de hållits tillgängliga här.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. Tjänsten</Accordion.Header>
        <Accordion.Body>
          2.1 Besiktningsval tillhandahåller en onlinetjänst på www.besiktningsval.se (”Webbplatsen”) som gör det enkelt för användaren att identifiera utvalda bilbesiktning, tjänster och erbjudanden på en specifik adress. Användaren har även möjlighet att via Webbplatsen beställa besiktning 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. Behandling av personuppgifter</Accordion.Header>
        <Accordion.Body>
          3.1 Se information om personuppgifter i separat integritetspolicy för besiktningsval.se.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>4. Prisangivelser m.m.</Accordion.Header>
        <Accordion.Body>
          4.1 Price Specifikationer m.m. på Webbplatsen tillgängliggörs av besiktningsfirmor. Besiktningsval har väl utvecklade rutiner för att kvalitetssäkra informationen och har som målsättning att all information på Webbplatsen ska vara korrekt, fullständig och uppdaterad och vidtar alla rimliga åtgärder för att se till att så är fallet. Besiktningsval kan dock inte garantera fullständig tillförlitlighet eller korrekthet avseende all information som finns presenterad på Webbplatsen, eftersom sådan information inhämtas från tredje part.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>5. Cookies</Accordion.Header>
        <Accordion.Body>
          5.1 Se information om cookies i separat integritetspolicy för besiktningsval.se.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>6. Skyddat innehåll</Accordion.Header>
        <Accordion.Body>
        6.1 Allt material på Webbplatsen tillhör Besiktningsval. Det är inte tillåtet att kopiera, modifiera, distribuera eller publicera innehåll från Besiktningsval utan skriftlig tillstånd från Besiktningsval. Användaren har dock rätt att göra en kopia av ett sökresultat som finns på Webbplatsen för eget icke kommersiellt bruk.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>7. Force majeure</Accordion.Header>
        <Accordion.Body>
        7.1 Besiktningsval är befriad från påföljd för underlåtenhet att fullgöra sina förpliktelser enligt dessa Allmänna Villkor, om och i den mån underlåtenheten har sin grund i omständighet, som ligger utanför Bredbandsvals kontroll, som inte skäligen borde ha förutsetts och/eller övervunnits och som förhindrar fullgörandet av förpliktelsen ifråga (såsom krig, kris handling, myndighets- åtgärder, förändrad lagstiftning, konflikt på arbetsmarknad, nyckelpersons sjukdom och därmed jämställda omständigheter).
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>

  );
}

export default Villkor;