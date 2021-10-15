import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  BannerSlider,
  HeaderComponent,
  ListJerseys,
  ListLiga,
  Tombol,
} from '../../components';
import {colors, fonts} from '../../utils';
import {dummyJerseys, dummyLigas} from '../../data';
import { Jarak } from '../../components';
export default class Home extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderComponent navigation={navigation}/>
          <BannerSlider />
          <View style={styles.pilihLiga}>
            <Text style={styles.label}>Pilih Liga</Text>
            {/* <ListLiga ligas={ligas} /> */}
          </View>

          <View style={styles.pilihJersey}>
            <Text style={styles.label}>
              Pilih <Text style={styles.boldLabel}>Jersey</Text> Yang Anda
              Inginkan
            </Text>
            {/* <ListJerseys jerseys={jerseys} navigation={navigation}/> */}
         
            <Tombol title="Profile" type="text" padding={7} marginTop={10} onPress={() => navigation.navigate('Profile')}/>
            <Tombol title="Visi Misi" type="text" padding={7} marginTop={10} onPress={() => navigation.navigate('Visi')}/>
            <Tombol title="Berita" type="text" padding={7} marginTop={10} onPress={() => navigation.navigate('Berita')}/>
            <Tombol title="Peta" type="text" padding={7} marginTop={10} onPress={() => navigation.navigate('Peta')}/>
          </View>

          <Jarak height={100}/>
        </ScrollView>
      </View>
        )
    }
} 


const styles = StyleSheet.create({
    page: {flex: 1, backgroundColor: colors.white},
    pilihLiga: {
      marginHorizontal: 30,
      marginTop: 10,
    },
    pilihJersey: {
      marginHorizontal: 30,
      marginTop: 10,
    },
    label: {
      fontSize: 18,
      fontFamily: fonts.primary.regular,
    },
    boldLabel: {
      fontSize: 18,
      fontFamily: fonts.primary.bold,
    },
  });
  
