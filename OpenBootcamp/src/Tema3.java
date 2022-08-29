public class Suma {
    public static void main(String args[]){
        int resultado = suma(50,20,30);
        System.out.println("La suma es de: " + resultado);

        Coche miCoche = new Coche();
        miCoche.NuevaPuerta();
        System.out.println("Mi coche tiene "+ miCoche.puertas + " puerta");
    }

    //Primera parte
    public static int suma(int num1, int num2, int num3){
        return num1 + num2 + num3;
    }
}


//Segunda parte
class Coche{
    public int puertas = 0;

    public void NuevaPuerta(){
        this.puertas++;
    }
}
