import Layout from "../components/layout";

function Home() {
  return (
    <Layout>
      <img src="/Santas-Helpers-11-2x.png" width="100%" />
      <div className="content-container" style={{ paddingTop: "0" }}>
        <h1>Bringing Christmas Cheer to Families in Need</h1>
        <div id="home-left">
          <h3>Who We Are</h3>
          <p>
            Santa’s Volunteers is a grassroots, non-profit organization that
            purchases and delivers food, knit goods and toys to thousands of our
            less-fortunate neighbors in the Chicago area at Christmas. We are
            unique in that every penny donated goes straight to the purchasing
            of these items. All administrative expenses are personally paid by
            our directors. We work with social service agencies and religious
            organizations to identify the families that are most in need.
            <br />
            <br />
            Each family gets two big bags of groceries – turkey or ham,
            cranberry sauce, fruit, vegetables, dessert and more – plus a gift
            certificate. They get another bag full of new, warm things to wear
            or blankets, and if they have children, there will be toys, games,
            and stuffed animals to hand out.
          </p>
        </div>
        <div id="home-right" className="d-flex flex-nowrap align-items-center">
          <img src="/homepageBannerImage.jpg" />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
