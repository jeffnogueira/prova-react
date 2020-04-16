import {StyleSheet} from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({

    buttonEdit: {
      backgroundColor: colors.comandos,
      height: 44,
      width: 110,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },

    buttonDelete: {
      backgroundColor: colors.danger,
      height: 44,
      width: 110,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    buttonText: {
        color: 'white',
    }

});
export default styles;