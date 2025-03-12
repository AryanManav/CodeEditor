
public class Main {
    public static class employee{
        String name = "Swastik";

        public String getName() {
            return name;
        }
        public void setName(){
            this.name = "Aryan";
        }

        public employee(){
            System.out.println("Welcome to a new employee class");
        }
        public employee(int a){
            System.out.println("Proxy number is: " + a);
        }

    }
    public static void main(String[] args) {
        employee aryan = new employee(4);
        System.out.println(aryan.getName());
        aryan.setName();
        System.out.println(aryan.getName());
    }
}
