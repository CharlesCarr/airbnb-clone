import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utilities/firebase";
import { getListing } from "../../utilities/getListing";

export const getStaticPaths = async () => {
  // fetch data
  const querySnapshot:any = await getDocs(collection(db, "listings"));
  const data: any = [];
  querySnapshot.forEach((snap: any) => {
    data.push(snap.data());
  });

  // map over data and return param object for each
  const paths = data.map((list:any) => {
    return {
      params: { id: list.id.toString() }
    }
  })

  // return paths array and fallback as false
  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const listing = await getListing(id);

  return {
    props: {
      listing
    }
  }
}

function Listing({ listing }: any) {
  console.log(listing);

  if (!listing) {
    return <p>No listing found...</p>
  };

  return (
    <div>
        <h1>INDIVIDUAL LISTING PAGE</h1>
        <h2>{listing.title}</h2>
    </div>
  )
}

export default Listing;