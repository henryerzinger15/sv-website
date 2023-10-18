import Layout from "../components/layout";

function HowWeGotStarted() {
  return (
    <Layout title="How We Got Started">
      <div className="content-container">
        <h1>How We Got Started</h1>
        <div id="home-left">
          <h3>“No money for food”</h3>
          <p>
            In 1956, as Christmas neared, Al Fellinger, a young employee of the
            utility company, knocked on a door of a Chicago home to check that
            the electrical appliances were in good working order. As Fellinger
            remembered it:
            <br />
          </p>
          <blockquote style={{ paddingTop: 20, paddingBottom: 20 }}>
            <p>
              “An elderly woman opened the door. I explained why I was there and
              inquired about her appliances. Specifically, I asked if she’d mind
              if I checked her refrigerator. She began to cry.
              <br />
              <br />
              Through her tears she told me that it didn’t matter if her
              refrigerator worked. I asked why and she said, ‘No money to buy
              food to put in it.’ Then she repeated ’No money for food.’ She
              went on to say that she used her refrigerator only to store
              dishes.”
            </p>
          </blockquote>
          <p>
            Fellinger couldn’t get those words out of his mind. He went to a
            store and bought twenty dollars’ worth of food—enough, in 1956, to
            fill several bags—and returned to the woman’s small apartment. Again
            she cried, but this time they were tears of happiness.
            <br />
            <br />
            Later he told the story to his friend Bob Erzinger. Together they
            contemplated how many other empty refrigerators there might be in
            Chicago that Christmas. And was there a way to put something in
            them? The result of that conversation, Santa’s Volunteers, through a
            simple grass roots effort, now raises over $125,000 a year and
            brings a good Christmas dinner and an array of Christmas gifts to
            thousands of Chicagoans.
          </p>
        </div>
        <div id="home-right">
          <img style={{ paddingBottom: 40 }} src="/Santas-Helpers-47-2x.png" />
          <p>
            Another result of that conversation is an unusual operating
            principle: Every penny contributed goes toward those Christmas
            bundles; nothing goes to administrative costs. The organization’s
            directors pay for all such expenses themselves.
            <br />
            <br />
            The success of Santa’s Volunteers lies in its simplicity and the
            willingness of people to reach out, give back, share a sense of
            community and try to bring some happy days during Christmas others
            in our community who are struggling. We are limited only by the
            amount of funds that generous people donate.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default HowWeGotStarted;
