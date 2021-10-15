import React, {Component} from 'react';
import { StyleSheet, View, TextInput} from 'react-native';
import {colors, fonts, responsiveHeight} from '../../../utils';
import { IconCari } from '../../../assets'
import { Jarak, Tombol } from '../../kecil'

export default class HeaderComponent extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>

          {/* Input Pencarian  */}
          <View style={styles.searchSection}>
            <IconCari />
            <TextInput placeholder="Cari Jersey. . ." style={styles.input} />
          </View>
          <Jarak width={10} />
          <Tombol icon="keranjang" padding={10} onPress={() => navigation.navigate('Keranjang')}/>
          <Tombol icon="keranjang" padding={10} onPress={() => navigation.navigate('Profile')}/>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight(125),
  },
  wrapperHeader: {
    marginTop: 15,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingLeft: 10,
    alignItems: 'center'
  },
  input: {
    fontSize: 16,
    fontFamily: fonts.primary.regular
  },
});
