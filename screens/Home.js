import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, SafeAreaView, Image, View, TouchableOpacity, Linking } from 'react-native';
import { useFonts } from 'expo-font';
import { Dimensions } from 'react-native';
import { useEffect, useState } from 'react';

const windowDimensions = Dimensions.get('window');

export default function Home() {
  const windowWidth = Dimensions.get('window').width;
  const [fontsLoaded, fontError] = useFonts({
    NeueHaas: require('./assets/fonts/NeueHaasDisplayMediu.ttf'),
  });
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
  });
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      setDimensions({ window, screen });
    });
    return () => subscription?.remove();
  });
  return (
    <ScrollView>
      <View style={styles.heroWrapper}>
        <Image source={require('./assets/hero-alt.png')} style={styles.hero} resizeMode="contain" />
      </View>
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 26, marginTop: -130, lineHeight: 30 }}>
            {/* fontFamily: 'NeueHaas', */}
            Design your dream interior with Avond StylePro.
          </Text>
        </View>

        <View style={styles.img2Wrapper}>
          <Image source={require('./assets/home2.png')} style={styles.hero} resizeMode="contain" />
        </View>
        <Text style={styles.paragraph}>
          With Avond StylePRO, you have the power to transform your empty rooms into stunning 3D designs effortlessly.
          But that's not all - we take your design experience to the next level by integrating top decor and furniture
          selections from Accra's leading companies directly into your virtual spaces.
        </Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.grayContainer}>
        <Text style={{ fontSize: 28, marginBottom: 30, paddingHorizontal: 30, marginTop: 15 }}>
          {/* fontFamily: 'NeueHaas', */}
          Our Workflow
        </Text>
        <View style={styles.cardsSection}>
          <View style={[styles.card, { width: windowWidth * 0.75 }]}>
            <Text style={styles.cardText}>
              Step 1: Find your style through our personalized Style Discovery Experience
            </Text>
          </View>
          <View style={[styles.card, { width: windowWidth * 0.75 }]}>
            <Text style={styles.cardText}>Step 2: Upload a photo of your space</Text>
          </View>
          <View style={[styles.card, { width: windowWidth * 0.75 }]}>
            <Text style={styles.cardText}>Step 3: Visualize your new space</Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={{ marginTop: -20 }}>
          <Image source={require('./assets/validations.png')} style={[styles.hero]} resizeMode="contain" />
        </View>

        <Text style={{ fontSize: 28, marginBottom: 15, marginTop: -30 }}>
          {/* fontFamily: 'NeueHaas', */}
          Tailor Your Own Dream Interior
        </Text>
        <Image
          source={require('./assets/home3.png')}
          style={[styles.hero, { marginBottom: 20 }]}
          resizeMode="contain"
        />
        <Text style={styles.paragraph}>
          Visualize your favorite pieces from the finest furniture brands in Accra right in your 3D designs. Whether
          it's a luxurious sofa, a statement rug, or exquisite decor accents, Avond StylePRO offers you the power to
          transform your space like never before.
        </Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 34, marginBottom: 30 }}>
          {/* fontFamily: 'NeueHaas', */}
          Our Services
        </Text>
        <View style={styles.servicesWrapper}>
          <Text style={styles.servicesHeader}>Consultation</Text>
          <Text style={styles.paragraph}>
            We offer standard and premium consultation services, guiding you from the project inception right until
            completion.
          </Text>
        </View>
        <View style={styles.servicesWrapper}>
          <Text style={styles.servicesHeader}>Interior Visualization</Text>
          <Text style={styles.paragraph}>Convert your design ideas into photorealistic 3D images</Text>
        </View>
        <View style={styles.servicesWrapper}>
          <Text style={styles.servicesHeader}>Interior Design</Text>
          <Text style={styles.paragraph}>
            Our artisans are skilled and efficient, ready to work at your project site and transport you from 3D
            visualization into reality.
          </Text>
        </View>
      </View>

      <View style={{ marginTop: -45 }}>
        <Image source={require('./assets/home4.png')} style={styles.hero} resizeMode="contain" />
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 34, marginBottom: 30 }}>
          {/* fontFamily: 'NeueHaas', */}
          What People Say About Us
        </Text>
        <View style={styles.testimonials}>
          <View style={[styles.testimonialCard, { width: windowWidth * 0.85 }]}></View>
          <View style={[styles.testimonialCard, { width: windowWidth * 0.85 }]}></View>
          <View style={[styles.testimonialCard, { width: windowWidth * 0.85 }]}></View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerWrapper}>
          <View>
            <Text style={styles.heading}>Contact</Text>
          </View>
          <View>
            <Text onPress={() => Linking.openURL('mailto:support@avondinteriors.com')} style={styles.email}>
              support@avondinteriors.com
            </Text>
            <Text onPress={() => Linking.openURL('tel:+2330986789')} style={styles.phone}>
              +233 098 6789
            </Text>
            <View style={styles.horizontalRule} />
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.addressContainer}>
                <Text style={styles.label}>Address</Text>
                <Text style={styles.value}>Diamond Street, Botwe</Text>
                <Text style={styles.value}>Accra-Ghana</Text>
              </View>

              <View style={styles.followContainer}>
                <Text style={styles.label}>Follow us</Text>
                <View>
                  <Text style={styles.followItem}>Instagram</Text>
                  <Text style={styles.followItem}>LinkedIn</Text>
                  <Text style={styles.followItem}>Twitter</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.copyright}>&#169; Avond Interiors. All Rights Reserved. 2024</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 30 },
  heroWrapper: {
    marginTop: -160,
  },
  hero: {
    width: '100%',
  },
  img2Wrapper: {
    marginTop: -165,
    marginBottom: -90,
  },
  paragraph: {
    fontSize: 18,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 170,
    height: 62,
    backgroundColor: 'black',
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 23,
  },
  grayContainer: {
    backgroundColor: '#D9D9D9',
  },
  cardsSection: {
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 140,
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  cardText: {
    fontSize: 20,
  },
  servicesWrapper: {
    paddingLeft: 30,
    marginBottom: 30,
  },
  servicesHeader: {
    fontSize: 25,
    marginBottom: 11,
  },
  testimonials: {
    alignItems: 'center',
  },
  testimonialCard: {
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    width: 325,
    height: 180,
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  footer: {
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 50,
  },
  footerWrapper: {
    flexDirection: 'row',
  },
  heading: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 25,
  },
  email: {
    color: 'white',
    fontSize: 12,
    marginBottom: 5,
  },
  phone: {
    color: 'white',
    fontSize: 12,
    marginBottom: 20,
  },
  horizontalRule: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.2,
    width: 210,
    marginTop: -10,
    marginBottom: 10,
  },
  addressContainer: {
    marginBottom: 20,
    marginRight: 35,
  },
  label: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    color: 'white',
    fontSize: 10,
  },
  followContainer: {
    marginBottom: 20,
  },
  followItem: {
    color: 'white',
    fontSize: 10,
    marginRight: 10,
  },
  copyright: {
    marginTop: 10,
    color: 'white',
    fontSize: 12,
  },
});
