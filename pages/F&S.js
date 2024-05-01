import Accordion from 'react-bootstrap/Accordion';


function FS() {
  return (
    <>
      <h1 style={{marginTop: '15px', marginBottom: '15px'}}>Frågor & Svar</h1>
      <Accordion style={{width: '80%', margin: '20px auto'}}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>NÄR SKA BILEN BESIKTAS?</Accordion.Header>
          <Accordion.Body>
            För personbilar med en totalvikt på upp till 3500 kg gäller fr.o.m. 20 maj 2018 följande:
            Den första kontrollbesiktningen ska utföras senast 36 månader efter att bilen togs i bruk för första gången
            Den andra kontrollbesiktningen ska utföras senast 24 månader efter den månad då den första kontrollbesiktningen genomfördes
            Därefter ska bilen kontrollbesiktas senast 14 månader efter månaden för föregående besiktning
            Att de fasta besiktningsperioderna slopades innebär att du när som helst kan göra en godkänd kontrollbesiktning, så länge tiden mellan besiktningarna inte överstiger 14 månader.

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Vad ska jag tänka på inför besiktningen (checklista)?</Accordion.Header>
          <Accordion.Body>
            Att vindrutetorkare och -spolare fungerar
            <br/>Att blinkers och belysning fungerar (glöm inte lampan vid registreringsskylten)
            <br/>Att tutan fungerar
            <br/>Att samtliga säkerhetsbälten fungerar (sätt gärna fast bältena i baksätet)
            <br/>Att det finns en varningstriangel i bilen
            <br/>Att däckens mönsterdjup är minst 1,6 mm
            <br/>Att backspeglarna är hela och sitter fast
            <br/>Att batteriet sitter fast ordentligt
            <br/>Att motorhuven går att öppna.
            <br/>Att oljenivån i motorn är okej (se bilens instruktionsbok)
            <br/>Att bodelen i husbil är fri från lösa föremål (så att de inte skadar inredningen vid ett bromsprov)
            <br/>Om din bil har en löstagbar dragkrok tar du med den och eventuell nyckel till dragkroken när du ska besikta. Vi kontrollerar att din dragkrok går att sätta fast och att ta bort samt att eventuellt nyckellås fungerar. Är du osäker på hur dragkroken ska fungera eller repareras rekommenderar vi dig att ta kontakt med tillverkaren.

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Vad står det på protokollet?</Accordion.Header>
          <Accordion.Body>
            När besiktningen är klar får du ett protokoll med resultatet – godkänt, underkänt med eller utan krav på ombesiktning, körförbud eller krav på annan typ av besiktning. Du får också en beskrivning om de olika resultaten och vad de innebär för dig som fordonsägare. Dessutom får du en beskrivning av vilka delar i bilen vi har kontrollerat.
  
            På protokollet anges även senaste datum då fordonet ska ha genomgått ny kontrollbesiktning. Vid underkänt resultat med krav på efterkontroll anges istället datum då körförbud inträder om inte godkänd kontroll utförts innan dess.
              
            Har du specifika frågor om ett besiktningsprotokoll rekommenderar vi dig att i första hand kontakta den besiktningsstation som utförde kontrollen.
          
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Vilka regler gäller för besiktning?</Accordion.Header>
          <Accordion.Body>
            När och hur ofta du behöver göra en kontrollbesiktning beror på vad det gäller för slags fordon. En del fordon är även besiktningsbefriade.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Vad gäller för löstagbar dragkrok?</Accordion.Header>
          <Accordion.Body>
            Om din bil har en löstagbar dragkrok tar du med den och eventuell nyckel till dragkroken när du ska besikta.
            Vi kontrollerar att din dragkrok går att sätta fast och att ta bort samt att eventuellt nyckellås fungerar. Är du osäker på hur dragkroken ska fungera eller repareras rekommenderar vi dig att ta kontakt med tillverkaren.
 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Kan bilen ha ett reservdäck när man besiktar den?</Accordion.Header>
          <Accordion.Body>
            Ja, men samma krav gäller för reservdäcket som de ordinarie däcken.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Vad ska det vara för mönsterdjup på däcken?</Accordion.Header>
          <Accordion.Body>
          Det är lag på att vinterdäck ska ha ett mönsterdjup på minst 3 mm och sommardäck 1,6 mm.
          Vid kontrollbesiktning kontrolleras att däcken har minst 1,6 mm i mönsterdjup. Detta gäller däck till personbil, lätt lastbil eller buss med en totalvikt av högst 3,5 ton samt släpvagn som dras av dessa fordon.
          För motorcykel gäller att mönsterdjupet ska vara minst 1 millimeter.

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>När blir fordon besiktningsbefriade?</Accordion.Header>
          <Accordion.Body>
            Fordon som är 50 år (mc 40 år) eller äldre är besiktningsbefriade om de har en godkänd kontrollbesiktning gjord när de har blivit 50 år. Vid beräkning av åldern utgår man ifrån ”Fordonsår” i vägtrafikregistret.

            De fordon som omfattas är:
            - 50 år gamla bilar och släpvagnar som dras av bilar, motorredskap klass I och släpvagnar som dras av dessa, samt motorredskap som utgörs av ombyggda bilar och traktorer som utgörs av ombyggda bilar (Epa- och A-traktor)
            - 40 år gamla motorcyklar
            - Personbilar och motorcyklar som är registrerade som tävlingsfordon, blir under vissa förutsättningar befriade från krav på besiktning
            - Vissa amatörbyggda fordon som efterliknar de äldre fordonen ovan kan efter registreringsbesiktning bli undantagna från krav på besiktning
            - Fordon på öar utan fast förbindelse är också undantagna från kravet på kontrollbesiktning.

            Undantag: Fordon i yrkesmässig trafik är inte besiktningsbefriade.

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Vad innebär anmärkning som leder till direkt körförbud?</Accordion.Header>
          <Accordion.Body>
          Om fordonet har så allvarliga fel att det får körförbud i samband med besiktningen på stationen måste fordonet bärgas därifrån. Körförbudet gäller tills en ny besiktning har gjorts.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>Vad innebär anmärkning som leder till efterkontroll?</Accordion.Header>
          <Accordion.Body>
          Om ditt fordon har blivit underkänt med krav på efterkontroll får du inte använda det mer än nödvändigt innan felen är åtgärdade. Du måste åtgärda felen snarast och därefter låta göra en ny kontroll. Kontrollen måste ske senast det datum som angivits i rutan för besiktningsresultatet på besiktningsprotokollet.Om man inte har utfört en efterkontroll senast det datumet så får fordonet automatiskt körförbud. Då får det endast köras den kortaste vägen till en verkstad eller besiktning.
          </Accordion.Body>
        </Accordion.Item>
        {/* <Accordion.Item eventKey="10">
          <Accordion.Header>Att tänka på inför besiktningen</Accordion.Header>
          <Accordion.Body>
          För att göra din besiktning enklare har vi gjort checklistor på saker som du enkelt kan kontrollera själv.

1- Måste alla bälten finnas på plats?
Samtliga registrerade säten med bälte måste finnas på plats. Se registreringsbeviset om du känner dig osäker.

2- Måste alla dörrar gå att öppna?
Ja, dörrarna måste kunna öppnas antingen från insidan eller från utsidan.

3- Måste bakluckan gå att öppna?
Nej, det ingår inte i vår kontroll. Men kom ihåg att ta fram varningstriangeln.

4- Om bilen har löstagbar dragkrok?
Om din bil har en löstagbar dragkrok, ta då med dig denna samt eventuell nyckel till besiktningen.

5- Vad behöver jag ta med till kontrollbesiktningen?
Du behöver inte ta med dig några dokument eller registreringshandlingar till kontrollbesiktningen. Alla uppgifter om bilen som besiktningsteknikern behöver finner han/hon i sin handdator. Är det en efterkontroll är det dock bra om du kan ta med protokollet från föregående kontrollbesiktning som visar på vad som underkänts. Vid andra slags besiktningar kan vissa dokument krävas. Om du har en löstagbar dragkrok, ta med denna samt nyckel.

6- Är det något speciellt jag bör tänka på när jag ska besikta min husvagn?
Kontrollera att luckor och dörrar ej är låsta. Det går bra att göra en gasolkontroll hos oss utan att gasoltub tas med.

7- Vad händer om varningstriangeln saknas?
Fordonet får en anmärkning i protokollet och felet måste åtgärdas snarast. Om tidigare noterad brist kvarstår vid nästa besiktningstillfälle resulterar detta i en anmärkning med krav på efterkontroll.

          </Accordion.Body>
        </Accordion.Item> */}
        <Accordion.Item eventKey="11">
          <Accordion.Header>Behöver jag ta bort bilbarnstolen?</Accordion.Header>
          <Accordion.Body>
          Nej, det behöver du inte, bilbarnstolen kan vara kvar vid besiktningen.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
    );
}

export default FS;