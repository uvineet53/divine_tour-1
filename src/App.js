import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// firebase
import { db } from "./firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

// import components
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/home/Home";
import Places from "./pages/places/Places";
import PlaceDetails from "./pages/place-details/Place-details";
import HospitalDetails from "./pages/hospital-details/Hospital-Details";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Hospitals from "./pages/hospital/Hospitals";
import ComingSoon from "./pages/coming-soon/ComingSoon";

function App() {
  // states
  const [places, setPlaces] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  // states for preloader
  const [placeLoding, setPlaceLoding] = useState(false);
  const [hospitalLoading, setHospitalLoading] = useState(false);

  // get data from firebase
  useEffect(() => {
    // get places data from firebase
    setPlaceLoding(true);

    const unsub = onSnapshot(
      collection(db, "places"),
      (snapshot) => {
        let placeList = [];
        snapshot.docs.forEach((doc) => {
          placeList.push({ id: doc.id, ...doc.data() });
        });
        setPlaces(placeList);
        setPlaceLoding(false);
      },
      (error) => {
        console.log(error);
      }
    );

    setHospitalLoading(true);
    const unsub2 = onSnapshot(
      collection(db, "hospitals"),
      (snapshot) => {
        let hospitalList = [];
        snapshot.docs.forEach((doc) => {
          hospitalList.push({ id: doc.id, ...doc.data() });
        });
        setHospitals(hospitalList);
        setHospitalLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
      unsub2();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                places={places}
                placeLoding={placeLoding}
                hospitalLoading={hospitalLoading}
              />
            }
          />
          <Route path="/places" element={<Places places={places} />} />
          <Route
            path="/place-details/:id"
            element={<PlaceDetails places={places} />}
          />
          <Route path="/hospitals" element={<Hospitals hospitals={hospitals} />} />
          <Route
            path="/hospital-details/:id"
            element={<HospitalDetails hospitals={hospitals} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
