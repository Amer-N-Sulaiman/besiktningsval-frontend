import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HeaderAndFooterExample() {
  return (
    <Card className="text-center" style={{margin: '20px'}}>
      <Card.Header as='h3'>Om Oss</Card.Header>
      <Card.Body>
        <Card.Title>Vårt uppdrag – att hitta bästa besiktningen för just dig</Card.Title>
        <br/>
        <Card.Text>
        Besiktningdsval.se är en gratistjänst som gör det enkelt att jämföra besiktning på nätet. Vårt fokus är att förse dig med all information du behöver genom att på ett överskådligt sätt synliggöra de firmor och deras besiktning som du kan få för din bils registreringsnummer– på detta sätt fångar vi erbjudanden från konkurrerande firmor.
<br/>
<br/>

Vi arbetar för att du i lugn och ro ska kunna göra ett väl underbyggt besiktningsval och på så sätt välja bästa besiktning för dig och även spara tid och pengar.
<br/>
<br/>

Vår tjänst är, och kommer att förbli, helt kostnadsfri att använda och vi visar alltid exakt samma erbjudanden och priser som finns i marknaden för din bil

        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted"><h6 style={{marginBottom: '0px'}}>Kontakt</h6><br/>
Vill du komma i kontakt med oss når du oss enklast på: <b>Kundtjanst@besiktningsval.se</b>

</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;