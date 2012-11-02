package com.hn.service.model;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import com.hn.service.jaxrs.rest.IProjectService;

@XmlRootElement( name="Project")
public class Project   {

	public Project() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	private String name;
	private String id;
	private String description;
	
	@XmlElement(name = "name")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}


	@XmlElement(name= "id")
	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	@XmlElement(name = "desc")
	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	

}
