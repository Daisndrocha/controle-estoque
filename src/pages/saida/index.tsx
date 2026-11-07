
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

export default function SaidaProduto() {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [motivo, setMotivo] = useState('Venda');

  function confirmarSaida() {
    if (!nome.trim() || !quantidade.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    Alert.alert(
      'Saída registrada',
      `${quantidade} unidade(s) de ${nome}. Motivo: ${motivo}`
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <View style={styles.intro}>
        <View style={styles.iconBox}>
          <Ionicons
            name="arrow-down-circle-outline"
            size={30}
            color="#1769AA"
          />
        </View>

        <Text style={styles.title}>Saída de Produto</Text>

        <Text style={styles.subtitle}>
          Registre a retirada de produtos do estoque.
        </Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.sectionTitle}>
          Dados da retirada
        </Text>

        <Text style={styles.label}>Nome do produto *</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome do produto"
        />

        <Text style={styles.label}>Quantidade de saída *</Text>
        <TextInput
          style={styles.input}
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
          placeholder="Ex: 2"
        />

        <Text style={styles.label}>Motivo da retirada</Text>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={motivo}
            onValueChange={(itemValue) => setMotivo(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Venda" value="Venda" />
            <Picker.Item label="Avarias" value="Avarias" />
            <Picker.Item label="Uso Interno" value="Uso Interno" />
          </Picker>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={confirmarSaida}
        >
          <Ionicons
            name="checkmark-circle-outline"
            size={21}
            color="#FFFFFF"
          />
          <Text style={styles.buttonText}>Confirmar Saída</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoCard}>
        <Ionicons name="information-circle-outline" size={22} color="#1769AA" />
        <Text style={styles.infoText}>
          A retirada de produtos deve ser registrada para manter
          o controle do inventário atualizado.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  container: {
    padding: 22,
    paddingBottom: 35,
  },
  intro: {
    marginBottom: 22,
  },
  iconBox: {
    backgroundColor: '#E0EDFA',
    width: 55,
    height: 55,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#17365D',
  },
  subtitle: {
    fontSize: 14,
    color: '#667085',
    marginTop: 7,
  },
  form: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EAECF0',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#17365D',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#344054',
    marginTop: 17,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 9,
    padding: 13,
    fontSize: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 9,
    overflow: 'hidden',
  },
  picker: {
    height: 52,
  },
  button: {
    backgroundColor: '#1769AA',
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    marginTop: 28,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  infoCard: {
    backgroundColor: '#EAF3FC',
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    color: '#344054',
    lineHeight: 19,
  },
});
