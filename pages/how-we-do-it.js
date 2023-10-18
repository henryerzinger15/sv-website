import Layout from "../components/layout";

function HowWeDoIt() {
  return (
    <Layout title="How We Do It">
      <div className="content-container" style={{alignItems: "center"}}>
        <h1>How We Do It</h1>

        <div id="home-left">
          <h3>Santa’s Volunteers is a grass roots, hands-on kind of organization.</h3>
          <p>
            A couple of weeks before Christmas, Directors, together with their families and friends, assemble in the basement of a church school for “Toy Packing.” Trucks pull up loaded with hundreds of boxes, each marked for a particular age group. These have been found, negotiated for, purchased and collected by Santa’s Volunteers’s Directors over the previous months.
          </p>
        </div>

        <div id="home-right">
          <img src="/Santas-Helpers-16-2x.png" />
        </div>

        <div id="home-left">
          <img src="/Santas-Helpers-56-2x.png" />
        </div>

        <div id="home-right">
          <p>
            The trucks are unloaded, the boxes opened and their contents organized. Volunteers get lists with the ages and size of each family specified. For example, a family #might consist of a mother, a 13 year-old girl, a 10 year-old boy, and a 4 year-old girl. A volunteer then “shops” for each family member by selecting appropriate knit goods and toys for each person. It is always a joy to watch the children of volunteers, as they seem to get particular satisfaction out of doing something for kids who have much less than they do.<br />
            <br />
            In less than an hour the filled bags are carried out to vans and trucks for delivery. It’s all over by 10 a.m.
          </p>
        </div>

        <div id="home-left">
          <p>
            A few days later, Directors gather at a Chicago supermarket for “Food Packing.” When they arrive, the aisles are already filled with grocery carts full of foodstuffs. Your donations paid for the groceries, and store employees donated the overnight labor to bag them.<br />
            <br />
            The Directors wheel the carts outside and load the bags into vans and trucks to send the food on its way to people who would have had very little to celebrate with otherwise. Every household gets a gift certificate for more groceries, too.<br />
            <br />
            When our founder, Al Fellinger, attended Toy Packing and Food Packing, he was always a little surprised at what his encounter in 1956 had led to. All told, your generosity helps spread the spirit of the holidays to several thousand Chicagoans in need!
          </p>
        </div>

        <div id="home-right">
          <img src="/Santas-Helpers-88-2x.png" />
        </div>

      </div>

    </Layout>
  );
}

export default HowWeDoIt;
