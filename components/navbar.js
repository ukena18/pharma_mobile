import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';

const Navbar = () => {
  return (
            <View style={styles.navbar}>
                <TouchableOpacity>
                <Text style={styles.link}>NAvbar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.link}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.link}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.link}>Add person</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.link}>Login</Text>
                </TouchableOpacity>

            </View>
  )
}

export default Navbar


const styles = StyleSheet.create({

})
