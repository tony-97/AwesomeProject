import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { logout } from '../store/actions';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';

const ProfileScreen: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialDesignIcons
          name="account-circle"
          size={64}
          color="#1976D2"
          style={{ marginBottom: 8 }}
        />
        <Text style={styles.title}>Mi Perfil</Text>
      </View>
      <View style={styles.userRow}>
        <MaterialDesignIcons
          name="account"
          size={24}
          color="#1976D2"
          style={{ marginRight: 8 }}
        />
        <Text style={styles.user}>Usuario: {user}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(logout())}
      >
        <MaterialDesignIcons
          name="logout"
          size={24}
          color="#fff"
          style={{ marginRight: 8 }}
        />
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    color: '#1976D2',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  user: {
    fontSize: 18,
    color: '#222',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1976D2',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
