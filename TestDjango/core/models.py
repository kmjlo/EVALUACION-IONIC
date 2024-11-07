from django.db import models

# Create your models here.

#Modelo para categoria
    
class Usuario(models.Model):
    username= models.CharField(max_length=50,primary_key=True,verbose_name="nombreUsuario")
    correo  = models.EmailField(max_length=100,null=False,blank=False)
    password = models.CharField(max_length=50,null=False,blank=False)
    
    def __str__(self):
        return self.username