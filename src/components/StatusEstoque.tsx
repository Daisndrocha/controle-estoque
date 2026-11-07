
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusProduto } from '../models/produto';

interface Props {
  status: StatusProduto;
}

export default function StatusEstoque({ status }: Props) {
  let corFundo = '#DCFCE7';
  let corTexto = '#166534';

  if (status === 'Estoque Baixo') {
    corFundo = '#FEF3C7';
    corTexto = '#92400E';
  }

  if (status === 'Sem Estoque') {
    corFundo = '#FEE2E2';
    corTexto = '#991B1B';
  }

  return (
    <View style={[styles.badge, { backgroundColor: corFundo }]}>
      <Text style={[styles.texto, { color: corTexto }]}>
        {status}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  texto: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
