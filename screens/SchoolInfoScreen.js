import React from 'react';
import { StyleSheet, Linking, TouchableOpacity, Text, Dimensions, View } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
// import PDFView from 'react-native-pdf-view';
import InAppBrowser from 'react-native-inappbrowser-reborn';

const SLIDER_WIDTH = Dimensions.get('window').width * 0.45;
const ICON_COLOR = ''

// website, lunch menu, club list, calendar

export default function SchoolInfoScreen({ route }) {
  const openLink = async (link) => {
    
  }

  return (
    <View style={styles.container}>
      <Grid>
        <Col>
          <Row>
            <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={() => openLink(route.params.data.url)}>
              <MaterialCommunityIcons name="web" size={SLIDER_WIDTH} color="black" />
              <Text style={styles.text}>Website</Text>
            </TouchableOpacity>
          </Row>
          <Row>
            <TouchableOpacity activeOpacity={0.5} style={styles.container}>
              <MaterialCommunityIcons name="food" size={SLIDER_WIDTH} color="black" />
              <Text style={styles.text}>Lunch Menu</Text>
            </TouchableOpacity>
          </Row>
        </Col>

        <Col>
          <Row>
          <TouchableOpacity activeOpacity={0.5} style={styles.container}>
              <Ionicons name="ios-calendar" size={SLIDER_WIDTH} color="black" />
              <Text style={styles.text}>Calendar</Text>
            </TouchableOpacity>
          </Row>
          <Row>
            <TouchableOpacity activeOpacity={0.5} style={styles.container}>
              <Ionicons name="ios-list" size={SLIDER_WIDTH} color="black" />
              <Text style={styles.text}>Club List</Text>
            </TouchableOpacity>
          </Row>
        </Col>
      </Grid>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  images: {
    width: SLIDER_WIDTH,
    borderRadius: 50
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'System',
    paddingTop: 10,
    fontWeight: '300'
  },
})