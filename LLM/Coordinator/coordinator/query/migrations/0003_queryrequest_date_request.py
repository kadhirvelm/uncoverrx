# Generated by Django 4.2.1 on 2023-05-07 02:49

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):
    dependencies = [
        ("query", "0002_alter_queryrequest_result"),
    ]

    operations = [
        migrations.AddField(
            model_name="queryrequest",
            name="date_request",
            field=models.DateTimeField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
