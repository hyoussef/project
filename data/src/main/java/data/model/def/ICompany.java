package data.model.def;

import javax.xml.bind.annotation.XmlElement;



public interface ICompany {

	@XmlElement
	String getCode();
    void setCode(String code);

    @XmlElement
    long getId();

    void setId(long id);

    @XmlElement
    String getDescription();

    void setDescription(String description);

    @XmlElement
    String getName();

    void setName(String name);

    @XmlElement
    String getAdress();

    void setAdress(String adress);

    @XmlElement
    IVille getVille();

    void setVille(IVille ville);
}
