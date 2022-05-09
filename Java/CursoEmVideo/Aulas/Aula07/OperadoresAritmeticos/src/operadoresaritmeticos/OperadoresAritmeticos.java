/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package operadoresaritmeticos;

/**
 *
 * @author Luiz Miguel
 */
public class OperadoresAritmeticos {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        /*int n1 = 3;
        int n2 = 5;
        float m = (n1+n2)/2;
        System.out.println("A média é igual a " + m);
        
        int numero = 5;
        numero++;
        System.out.println("Operador unário pós incremento é " + numero);
        
        int numero2 = 5;
        int valor = 5 + ++numero2;
        System.out.println("Operador unário pré incremento é " + valor);
        
        int x = 4;
        x += 2; //x = x + 2
        System.out.println(x);
        
        float v = 8.9f;
        int arf = (int)Math.floor(v);
        int arc = (int)Math.ceil(v);
        int ara = (int)Math.round(v);
        System.out.println("Arrendondamento para baixo " + arf);
        System.out.println("Arredondamento para cima " + arc);
        System.out.println("Arredondamento aritmetico " + ara);*/
        
        double ale = Math.random();
        int n = (int)(5 + ale * (10-5));
        System.out.println(n);
    }
    
}
